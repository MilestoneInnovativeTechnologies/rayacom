<?php

namespace Milestone\Rayacom\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Customer extends Master
{
    public function __construct(array $attributes = []) {
        parent::__construct($attributes);
        self::$MASTER = MasterData::where('name','CUSTOMER')->value('id');
    }

    public function area(){
        $area_prop_id = DB::table('_properties')->where(['name' => 'area','master' => self::$MASTER])->value('id');
        return DB::table('_property_masters')->where(['property' => $area_prop_id])->whereJsonContains('ids',intval($this->id))->value('data');
    }

    public function sales_executives(){
        $executive_master_id = DB::table('_masters')->where('name','SALES_EXECUTIVE')->value('id');
        $executive_area_property = DB::table('_properties')->where(['name' => 'areas','master' => $executive_master_id])->value('id');
        return json_decode(DB::table('_property_masters')->where(['property' => $executive_area_property, 'data' => $this->area()])->value('ids'));
    }

}
