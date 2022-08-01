<?php

namespace Milestone\Rayacom\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class Property extends Model
{
    protected static function booted() {
        parent::booted();
        static::saved(function(){
            Cache::forever(rayacom_config('cache_key.db_properties_last_updated_time'),Carbon::parse(DB::table('_properties')->max('updated_at') ?: '2000-01-01 00:00:01')->unix());
            Cache::forever(rayacom_config('cache_key.db_properties'),DB::table('_properties')->get()->groupBy->master->map(function($props){ return $props->map(fn($prop) => Arr::except((array) $prop,['master','created_at','updated_at'])); })->toArray());
        });

    }

    protected $table = '_properties';

    public static function set($master,$name,$data,$value){
        $property = self::where(compact('master','name'))->first();
        if(!$property) return null;
        if($property->index === 'N' && $property->nature !== 'Y/N') MasterProperty::set($property,$data,$value);
        else PropertyMaster::set($property,$value,$data); //(1,1,10001)
    }
}
