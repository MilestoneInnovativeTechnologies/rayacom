<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    public function getClass($item){
        return str(self::class)->replace('Post',str($item)->studly())->toString();
    }

    public function post($item,$action){
        $call = $this->getClass($item) . "@" . $action;
        return app()->call($call);
    }

    public function latest(){
        $data = ['_next' => now()->toDateTimeString()];
        $data['ORDER'] = OrderController::orders();
        if(request()->header('Latest-Date')){
            $latest_date = request()->header('Latest-Date',now()->toDateTimeString()) ?: now()->toDateTimeString();
            $data = array_merge($data,$this->latest_masters($latest_date));
        }
        return $data;
    }

    public function latest_masters($latest_date){
        $latest_master = db_master_data_time();
        $data = [];
        foreach ($latest_master as $master_id => $master_max){
            if(Carbon::parse($latest_date)->lessThan(Carbon::parse($master_max))){
                $data = array_merge($data,$this->get_latest_master($master_id,$latest_date));
            }
        }
        if(Carbon::parse($latest_date)->lessThan(Carbon::parse(db_properties_last_updated()))){
            $data['mp'] = $this->get_master_properties($latest_date);
            $data['pm'] = $this->get_property_masters($latest_date);
        }
        return $data;
    }

    public function get_latest_master($master_id,$after_date){
        $master_name = Arr::get(db_masters(),$master_id);
        $data = DB::table('_master_data')->where('master',$master_id)
            ->where(function($Q) use($after_date){ $Q->where('created_at','>',$after_date); })
            ->orWhere(function($Q)use ($after_date){ $Q->where('created_at','<=',$after_date)->where('updated_at','>',$after_date); })
            ->get();
        return [$master_name => $data];
    }

    public function get_master_properties($after_date){
        return DB::table('_master_properties')
            ->where(function($Q) use($after_date){ $Q->where('created_at','>',$after_date); })
            ->orWhere(function($Q)use ($after_date){ $Q->where('created_at','<=',$after_date)->where('updated_at','>',$after_date); })
            ->get();
    }

    public function get_property_masters($after_date){
        return DB::table('_property_masters')
            ->where(function($Q) use($after_date){ $Q->where('created_at','>',$after_date); })
            ->orWhere(function($Q)use ($after_date){ $Q->where('created_at','<=',$after_date)->where('updated_at','>',$after_date); })
            ->orderBy('updated_at')
            ->get();
    }

}
