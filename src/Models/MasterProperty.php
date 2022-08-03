<?php

namespace Milestone\Rayacom\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class MasterProperty extends Model
{
    protected static function booted() {
        parent::booted();
        static::saved(function(){
            Cache::forever(rayacom_config('cache_key.db_master_prop_max_time'),DB::table('_master_properties')->max('updated_at') ?: '2000-01-01 00:00:01');
        });

    }

    protected $table = '_master_properties';
    protected $guarded = [];

    public static function set($Property,$data,$value,$id = false){
        if($id) {
            $mp = self::find($id);
            $mp->update(compact('value'));
        } else {
            $property = $Property->id;
            $mps = self::where(compact('property','data'))->get();
            if($mps->isEmpty() || $Property->nature === 'Multiple') {
                $mp = new self(compact('property','data','value'));
                $mp->save();
            } else {
                $mp = $mps->first();
                $mp->value = $value;
                $mp->save();
            }
        }
        return $mp ?: null;
    }
}
