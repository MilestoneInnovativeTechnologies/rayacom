<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;
use Milestone\Rayacom\Models\LeaveRecord;


class LeaveController extends Controller
{
  public function store(){
    $data = new LeaveRecord(request()->only(['executive', 'start_date', 'end_date', 'description']));
    $data->save();
    return $data;
  }

    public static function leaves(){
        $latest_date = request()->header('Latest-Date','2000-01-01 00:00:01') ?: '2000-01-01 00:00:01';
        if(Carbon::parse($latest_date)->lessThan(Carbon::parse(Cache::get(rayacom_config('cache_key.db_leaves_last_updated_time'))))){
            $master = session('auth_type'); $auth_data = session('auth_data');
            if($master === 'SALES_EXECUTIVE') {
                $query = LeaveRecord::where(['executive' => $auth_data])->where(function($Q)use($latest_date){
                    $Q->where('created_at','>',$latest_date)->orWhere(function($QQ)use($latest_date){
                        $QQ->where('created_at','<=',$latest_date)->where('updated_at','>',$latest_date);
                    });
                });
                if($query->count() < 50) return $query->get();
                if($query->recent()->count() < 50) return $query->recent()->get();
                return $query->recentAgain()->get();
            }
            if($master === 'ADMIN') {
                $query = LeaveRecord::where(function($Q)use($latest_date){
                    $Q->where('created_at','>',$latest_date)->orWhere(function($QQ)use($latest_date){
                        $QQ->where('created_at','<=',$latest_date)->where('updated_at','>',$latest_date);
                    });
                });
                if($query->count() < 50) return $query->get();
                if($query->recent()->count() < 50) return $query->recent()->get();
                return $query->recentAgain()->get();
            }
        }
        return [];
    }

}
