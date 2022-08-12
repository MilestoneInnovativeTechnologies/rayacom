<?php

namespace Milestone\Rayacom\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class Master extends Model
{
    protected static function booted() {
        parent::booted();
        static::updating(function($master){
            $properties = array_values(array_diff(array_keys($master->getAttributes()),['id','name','master','created_at','updated_at']));
            foreach ($properties as $property) {
                Property::set($master->master,$property,$master->id,$master->$property);
                $master->offsetUnset($property);
            }
            return $master->isDirty('name');
        });
        static::creating(function($master){
            if(!$master->master) $master->master = self::$MASTER;
            $properties = array_values(array_diff(array_keys($master->getAttributes()),['id','name','master','created_at','updated_at']));
            foreach ($properties as $property) {
                self::RFCA($property,$master->$property);
                $master->offsetUnset($property);
            }
        });
        static::created(function($master){
            if(!empty(self::$RFCAs)) {
                $master_id = $master->master; $data_id = $master->id;
                foreach (self::$RFCAs as $property => $value) {
                    Property::set($master_id,$property,$data_id,$value);
                }
                self::$RFCAs = [];
            }
            self::rGenCache();
        });
        static::saved(function($master){
            if($master->wasChanged('name')) self::rGenCache();
        });
    }

    protected $table = '_master_data';
    protected $guarded = [];
    public static $MASTER = null;

    private static $RFCAs = [];

    private static function RFCA($attr,$value){ self::$RFCAs[$attr] = $value; }
    private static function rGenCache(){
        Cache::forever(rayacom_config('cache_key.db_master_data_max_times'),DB::table('_master_data')->select(['master', DB::raw('max(updated_at) as `max`')])->groupBy('master')->pluck('max', 'master')->toArray());
        Cache::forever(rayacom_config('cache_key.db_master_data'),DB::table('_master_data')->get()->groupBy->master->map(fn($masters) => $masters->map(fn($master) => [intval($master->id), trim($master->name)]))->toArray());
    }
}
