<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Milestone\Rayacom\Models\Offer;


class OfferController extends Controller
{
    public function store(){
        $data = new Offer(request()->only(['item', 'minimum_quantity', 'offer_quantity', 'type', 'customers', 'status']));
        $data->save();
        return $data;
    }

    public static function offers(){
        $latest_date = request()->header('Latest-Date','2000-01-01 00:00:01') ?: '2000-01-01 00:00:01';
        if(Carbon::parse($latest_date)->lessThan(Carbon::parse(Cache::get(rayacom_config('cache_key.db_reviews_last_updated_time'))))){
            $master = session('auth_type'); $auth_data = session('auth_data');
            if($master === 'CUSTOMER') {
                return Offer::where(['status' => 'Published'])->where(function($Q)use($latest_date){
                    $Q->where('created_at','>',$latest_date)->orWhere(function($QQ)use($latest_date){
                        $QQ->where('created_at','<=',$latest_date)->where('updated_at','>',$latest_date);
                    });
                })->where(function($Q) use($auth_data) {
                    $Q->where('type','Public')->orWhere(function($QQ) use($auth_data) {
                        $QQ->where('type','Private')->where('customers','like','%,'. $auth_data .',%');
                    });
                })->get();
            }
            if($master === 'SALES_EXECUTIVE') {
                return Offer::where('created_by',$auth_data)->where(function($Q)use($latest_date){
                    $Q->where('created_at','>',$latest_date)->orWhere(function($QQ)use($latest_date){
                        $QQ->where('created_at','<=',$latest_date)->where('updated_at','>',$latest_date);
                    });
                })->get();
            }
            return Offer::where(function($Q)use($latest_date){
                $Q->where('created_at','>',$latest_date)->orWhere(function($QQ)use($latest_date){
                    $QQ->where('created_at','<=',$latest_date)->where('updated_at','>',$latest_date);
                });
            })->get();
        }
        return [];
    }
}
