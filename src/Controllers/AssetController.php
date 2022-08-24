<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Milestone\Rayacom\Models\Customer;
use Milestone\Rayacom\Models\Property;
use Milestone\Rayacom\Models\SalesExecutive;

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
            if($name === 'ADMIN') return [];
            if($name === 'CUSTOMER') return [[session('auth_data'),session('auth_user.name')]];
            if($name === 'AREA') {
                $customer_area = Customer::find(session('auth_data'))->area();
                return array_values(array_filter(db_master_data($id),fn($Ary) => $Ary[0] == $customer_area));
            }
            if($name === 'SALES_EXECUTIVE') {
                $executives = Customer::find(session('auth_data'))->area();
                return array_values(array_filter(db_master_data($id),fn($Ary) => in_array($Ary[0],$executives)));
            }
        }
        if($auth_type === 'SALES_EXECUTIVE') {
            //CUSTOMER,AREA,ITEM,ADMIN,SALES_EXECUTIVE
            if($name === 'ADMIN') return [];
            if($name === 'SALES_EXECUTIVE') return [[session('auth_data'),session('auth_user.name')]];
            if($name === 'AREA') {
                $areas = SalesExecutive::find(session('auth_data'))->areas();
                return array_values(array_filter(db_master_data($id),fn($Ary) => in_array($Ary[0],(array) $areas)));
            }
            if($name === 'CUSTOMER') {
                $customers = SalesExecutive::find(session('auth_data'))->customers();
                return array_values(array_filter(db_master_data($id),fn($Ary) => in_array($Ary[0],$customers)));
            }
        }
        return db_master_data($id);
    }

    public function master_properties($user,$time,$id,$name) {
        $properties = db_properties($id);
        $property_ids = empty($properties) ? [] : array_values(array_column($properties,'id'));
        return DB::table('_master_properties')->whereIn('property',$property_ids)->get()->groupBy->property->map(fn($rows) => $rows->groupBy->data->map(fn($rows2) => array_column($rows2->toArray(),'value')));
    }
}
