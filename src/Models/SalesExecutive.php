<?php

namespace Milestone\Rayacom\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class SalesExecutive extends Master
{
  public function __construct(array $attributes = [])
  {
    parent::__construct($attributes);
    self::$MASTER = MasterData::where('name','SALES_EXECUTIVE')->value('id');
  }

  public function areas(){
      $se_areas_prop_id = DB::table('_properties')->where(['name' => 'areas','master' => self::$MASTER])->value('id');
      return DB::table('_property_masters')->where(['property' => $se_areas_prop_id])->whereJsonContains('ids',intval($this->id))->pluck('data')->toArray();
  }

  public function customers(){
      $customer_master_id = DB::table('_masters')->where('name','CUSTOMER')->value('id');
      $customer_area_property = DB::table('_properties')->where(['name' => 'area','master' => $customer_master_id])->value('id');
      return DB::table('_property_masters')->where(['property' => $customer_area_property])->whereIn('data',$this->areas())->pluck('ids')->flatMap(function($ids){
          return json_decode($ids);
      })->toArray();
  }
}
