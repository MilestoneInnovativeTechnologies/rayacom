<?php

namespace Milestone\Rayacom\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class PropertyMaster extends Model
{
    protected static function booted() {
        parent::booted();
        static::saved(function(){
            Cache::forever(rayacom_config('cache_key.db_properties_last_updated_time'),Carbon::parse(DB::table('_property_masters')->max('updated_at') ?: '2000-01-01 00:00:01')->unix());
        });

    }

    protected $table = '_property_masters';
    protected $casts = ['ids' => 'array'];
    protected $guarded = [];

    public static function set($Property, $value, $id){//(1,1,10001)
        if($Property->nature === 'Y/N') self::YNEntry($Property,$value,$id);
        if($Property->value_master) {
            if($Property->nature === 'Single') self::SingleMasterEntry($Property,$value,$id);
            if($Property->nature === 'Multiple') self::MultipleMasterEntry($Property,$value,$id);
        } else {
            if($Property->nature === 'Single') self::SingleEntry($Property,$value,$id);
            if($Property->nature === 'Multiple') self::MultipleEntry($Property,$value,$id);
        }
    }

    public static function YNEntry($Property, $yn, $pm_id){
        $property = $Property->id;
        $pm = self::where(compact('property'))->first();
        if($pm) {
            $pm_ids = Arr::get($pm,'ids',[]) ?: [];
            if(!in_array($pm_id,$pm_ids) && $yn) {
                $pm_ids[] = $pm_id;
                $pm->ids = array_values(array_unique($pm_ids));
                $pm->save();
            } elseif(in_array($pm_id,$pm_ids) && !$yn) {
                $pm->ids = array_values(array_unique(array_values(array_diff($pm_ids,[$pm_id]))));
                $pm->save();
            }
        } else {
            $ids = $yn ? [$pm_id] : [];
            $pm = new self(compact('property','ids'));
            $pm->save();
        }
    }

    public static function SingleMasterEntry($Property,$data,$id){
        $property = $Property->id;
        if(!$data) {
            $my_pms = self::where(compact('property'))->get()->filter(function($pm)use($id){
                return in_array($id,$pm->ids);
            });
            if($my_pms->isNotEmpty()) {
                $my_pms->each(function($pm) use($id){
                    $pm->ids = array_values(array_unique(array_diff($pm->ids,[$id])));
                    $pm->save();
                });
            }
        } else {
            if(is_array($data)) $data = $data[0];
            $pms = self::where(compact('property'))->get();
            if($pms->isEmpty()) {
                $ids = [$id];
                $pm = new self(compact('property','data','ids'));
                $pm->save();
            } else {
                $data_pms = $pms->where('data',$data);
                if($data_pms->isEmpty()) {
                    $ids = [$id];
                    $pm = new self(compact('property','data','ids'));
                    $pm->save();
                } else {
                    if($data_pms->count() === 1) {
                        $data_pm = $data_pms->first();
                        $ids = $data_pm->ids;
                        if(!in_array($id,$ids)){
                            $ids[] = $id;
                            $data_pm->ids = $ids;
                            $data_pm->save();
                        }
                    } else {
                        $ids = [$id];
                        $data_pms->each(function($pm,$idx) use(&$ids){
                            array_push($ids,...$pm->ids);
                            if($idx > 0) $pm->delete();
                        });
                        $pm = $data_pms->first();
                        $pm->ids = array_values(array_unique($ids));
                        $pm->save();
                    }
                    self::where(['property' => $property])->where('data','!=',$data)->get()->each(function($pm) use($id){
                        if(in_array($id,$pm->ids)) {
                            $pm->ids = array_values(array_unique(array_diff($pm->ids,[$id])));
                            $pm->save();
                        }
                    });
                }
            }
        }
    }

    public static function MultipleMasterEntry($Property,$data,$id){
        $property = $Property->id;
        if(!$data){
            $pms = self::where(compact('property'))->get();
            $pms->filter(function($pm) use($id){
                return in_array($id,$pm->ids);
            })->each(function($pm) use($id) {
                $pm->ids = array_values(array_unique(array_diff($pm->ids,[$id])));
                $pm->save();
            });
        } else {
            if(!is_array($data)) $data = [$data];
            $pms = self::where(['property' => $property])->get();
            foreach ($data as $datum) {
                if(!$pms->contains('data',$datum)){
                    $pm = new self(['property' => $property,'data' => $datum, 'ids' => [$id]]);
                    $pm->save();
                }
            }
            self::where(['property' => $property])->whereIn('data',$data)->get()->each(function($pm) use($id){
                if(!in_array($id,$pm->ids)) {
                    $ids = $pm->ids; $ids[] = $id;
                    $pm->ids = array_values(array_unique($ids));
                    $pm->save();
                }
            });
            self::where(['property' => $property])->whereNotIn('data',$data)->get()->each(function($pm) use($id){
                if(in_array($id,$pm->ids)) {
                    $ids = $pm->ids;
                    $pm->ids = array_values(array_unique(array_diff($ids,[$id])));
                    $pm->save();
                }
            });
        }
    }

    public static function SingleEntry($Property,$value,$id){
        $property = $Property->id;
        if(!$value) {
            self::where(compact('property'))->each(function($pm) use($id){
                if(in_array($id,$pm->ids)) {
                    $ids = array_values(array_unique(array_diff($pm->ids,[$id])));
                    $pm->ids = $ids;
                    $pm->save();
                }
            });
        } else {
            if(is_array($value)) $value = $value[0];
            if(!self::where(compact('property','value'))->exists()) {
                $ids = [$id];
                $pm = new self(compact('property','value','ids'));
                $pm->save();
            }
            $pms = self::where(compact('property','value'))->get();
            if($pms->count() === 1) {
                $pm = $pms->first(); $ids = $pm->ids ?: [];
                if(!in_array($id,$pm->ids)) {
                    $ids[] = $id;
                    $pm->ids = array_values(array_unique($ids));
                    $pm->save();
                }
            } else {
                $ids = [$id];
                $pms->each(function($pm,$idx) use(&$ids){
                    array_push($ids,...$pm->ids);
                    if($idx > 0) $pm->delete();
                });
                $pm = $pms->first();
                $pm->ids = array_values(array_unique($ids));
                $pm->save();
            }
            self::where('property',$property)->where('value','!=',$value)->each(function($pm) use($id){
                if(in_array($id,$pm->ids)) {
                    $pm->ids = array_values(array_unique(array_diff($pm->ids,[$id])));
                    $pm->save();
                }
            });
        }
    }

    public static function MultipleEntry($Property,$value,$id){
        $property = $Property->id;
        if(!$value){
            $pms = self::where(compact('property'))->get();
            $pms->filter(function($pm) use($id){
                return in_array($id,$pm->ids);
            })->each(function($pm) use($id) {
                $pm->ids = array_values(array_unique(array_diff($pm->ids,[$id])));
                $pm->save();
            });
        } else {
            if(!is_array($value)) $value = [$value];
            $pms = self::where(['property' => $property])->get();
            foreach ($value as $val) {
                if(!$pms->contains('value',$val)){
                    $pm = new self(['property' => $property,'value' => $val, 'ids' => [$id]]);
                    $pm->save();
                }
            }
            self::where(['property' => $property])->whereIn('value',$value)->get()->each(function($pm) use($id){
                if(!in_array($id,$pm->ids)) {
                    $ids = $pm->ids; $ids[] = $id;
                    $pm->ids = array_values(array_unique($ids));
                    $pm->save();
                }
            });
            self::where(['property' => $property])->whereNotIn('value',$value)->get()->each(function($pm) use($id){
                if(in_array($id,$pm->ids)) {
                    $ids = $pm->ids;
                    $pm->ids = array_values(array_unique(array_diff($ids,[$id])));
                    $pm->save();
                }
            });
        }
    }
}
