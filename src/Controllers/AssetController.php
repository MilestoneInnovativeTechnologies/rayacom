<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Milestone\Rayacom\Models\Property;

class AssetController extends Controller
{
    public function init(){
        if(session('logged') && session('auth_master') && session('auth_data')){
            $masters = json_encode(db_masters());
            $prop_time = max(Carbon::parse(db_properties_last_updated())->unix(),Carbon::parse(db_prop_master_last_updated())->unix());
            $master_time = json_encode(Arr::map(db_master_data_time(),fn($max) => Carbon::parse($max)->unix()));
            $master_props_time = Carbon::parse(db_master_prop_last_updated())->unix();
            $master = session('auth_master'); $data = session('auth_data');
            $script = <<<SCRIPT
const MASTERS = $masters;
AssetWorker = new Worker('static/AssetWorker.js');
AssetWorker.postMessage({ type:'init',payload:{ masters:$masters,property_time:$prop_time,master_time:$master_time,master_property_time:$master_props_time,auth_master:$master,auth_data:$data } });
SCRIPT;
        } else {
            $script = "const MASTERS = null;";
        }
        return response($script)->withHeaders(["Cache-Control" => "no-cache, must-revalidate, no-store, max-age=0, private","Content-Type" => "application/javascript"]);
    }

    public function properties($time) {
        $properties = db_properties();
        $m_pis = collect($properties)->flatten(1)->map(fn($property) => $property['index'] === 'Y' ? $property['id'] : null)->filter()->values()->toArray();
        $properties_masters = DB::table('_property_masters')
            ->whereIn('property',$m_pis)
            ->get(['property','value','data','ids'])
            ->map(function($row){
                $row->data = $row->data ? intval($row->data) : null;
                $row->ids = json_decode($row->ids,true);
                return (array) $row;
            })
            ->groupBy('property')
            ->toArray();
        $merged_properties = [];
        foreach ($properties as $master => $m_properties){
            if(!in_array($master,$merged_properties)) $merged_properties[$master] = [];
            foreach ($m_properties as $idx => $property){
                $merged_properties[$master][$idx] = $property;
                if($property['index'] === 'Y' && Arr::has($properties_masters,$property['id'])) {
                    $masters = Arr::get($properties_masters,$property['id']);
                    $merged_properties[$master][$idx]['masters'] = array_map(fn($master) => Arr::except($master,'property'),$masters);
                }
            }
        }
        return $merged_properties;
    }

    public function master($user,$time,$id,$name) {
        $auth_type = session('auth_type');
        if($auth_type === 'CUSTOMER') {
            if($name === 'CUSTOMER') return array_values(array_filter(db_master_data($id),fn($Ary) => $Ary[0] == $user));
            if($name === 'AREA') {
                $property_id = DB::table('_properties')->where(['name' => 'area','master' => session('auth_master')])->value('id');
                $customer_area = DB::table('_property_masters')->where(['property' => $property_id])->whereJsonContains('ids',intval($user))->value('data');
                return array_values(array_filter(db_master_data($id),fn($Ary) => $Ary[0] == $customer_area));
            }
            if($name === 'SALES_EXECUTIVE') {
                $property_id = DB::table('_properties')->where(['name' => 'area','master' => session('auth_master')])->value('id');
                $customer_area = DB::table('_property_masters')->where(['property' => $property_id])->whereJsonContains('ids',intval($user))->value('data');
                $se_area_property_id = DB::table('_properties')->where(['name' => 'areas','master' => array_flip(db_masters())['SALES_EXECUTIVE']])->value('id');
                $customer_area_ses = json_decode(DB::table('_property_masters')->where(['property' => $se_area_property_id,'data' => $customer_area])->value('ids') ?: '[]');
                return array_values(array_filter(db_master_data($id),fn($Ary) => in_array($Ary[0],$customer_area_ses)));
            }
            if($name === 'ADMIN') {
                return [];
            }
        }
        if($auth_type === 'SALES_EXECUTIVE') {
            //CUSTOMER,AREA,ITEM,ADMIN,SALES_EXECUTIVE
            if($name === 'ADMIN') return [];
            if($name === 'AREA') {
                $se_areas_prop_id = DB::table('_properties')->where(['name' => 'areas','master' => session('auth_master')])->value('id');
                $areas = DB::table('_property_masters')->where(['property' => $se_areas_prop_id])->whereJsonContains('ids',intval($user))->pluck('data')->toArray();
                return array_values(array_filter(db_master_data($id),fn($Ary) => in_array($Ary[0],(array) $areas)));
            }
            if($name === 'CUSTOMER') {
                $se_areas_prop_id = DB::table('_properties')->where(['name' => 'areas','master' => session('auth_master')])->value('id');
                $areas = DB::table('_property_masters')->where(['property' => $se_areas_prop_id])->whereJsonContains('ids',intval($user))->pluck('data')->toArray() ?: [];
                $c_area_prop_id = DB::table('_properties')->where(['name' => 'area','master' => array_flip(db_masters())['CUSTOMER']])->value('id');
                $area_customers = [];
                DB::table('_property_masters')->where(['property' => $c_area_prop_id])->whereIn('data',$areas)->pluck('ids')->each(function($ids)use(&$area_customers){
                    $area_customers = array_values(array_unique(array_merge($area_customers,json_decode($ids))));
                });
                return array_values(array_filter(db_master_data($id),fn($Ary) => in_array($Ary[0],$area_customers)));
            }
            if($name === 'SALES_EXECUTIVE') return array_values(array_filter(db_master_data($id),fn($Ary) => $Ary[0] == $user));
        }
        return db_master_data($id);
    }

    public function master_properties($user,$time,$id,$name) {
        $properties = db_properties($id);
        $property_ids = empty($properties) ? [] : array_values(array_column($properties,'id'));
        return DB::table('_master_properties')->whereIn('property',$property_ids)->get()->groupBy->property->map(fn($rows) => $rows->groupBy->data->map(fn($rows2) => array_column($rows2->toArray(),'value')));
    }
}
