<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Milestone\Rayacom\Models\Order;
use Milestone\Rayacom\Models\SalesExecutive;
use Milestone\Rayacom\Requests\OrderRequest;

class OrderController extends Controller
{
    public function store(OrderRequest $request){
        return $request->store()->store_items()->order;
    }

    public function status(){
        $order = request('order');
        $status = request('status');
        $Order = Order::find($order);
        $Order->status = $status;
        $Order->save();
        return $Order;
    }

    public static function orders(){
        $latest_date = request()->header('Latest-Date','2000-01-01 00:00:01') ?: '2000-01-01 00:00:01';
        if(Carbon::parse($latest_date)->lessThan(Carbon::parse(Cache::get(rayacom_config('cache_key.db_orders_last_updated_time'))))){
            $master = session('auth_type'); $auth_data = session('auth_data');
            if($master === 'CUSTOMER') {
                $query = Order::where(['customer' => $auth_data])->with(['items'])->where(function($Q)use($latest_date){
                    $Q->where('created_at','>',$latest_date)->orWhere(function($QQ)use($latest_date){
                        $QQ->where('created_at','<=',$latest_date)->where('updated_at','>',$latest_date);
                    });
                });
                if($query->count() < 50) return $query->get();
                if($query->recent()->count() < 50) return $query->recent()->get();
                return $query->recentAgain()->get();
            }
            if($master === 'SALES_EXECUTIVE'){
                $exe_customers = SalesExecutive::find($auth_data)->customers();
                $query = Order::with(['items'])->whereIn('customer',$exe_customers)->where(function($Q)use($latest_date){
                    $Q->where('created_at','>',$latest_date)->orWhere(function($QQ)use($latest_date){
                        $QQ->where('created_at','<=',$latest_date)->where('updated_at','>',$latest_date);
                    });
                });
                if($query->count() < 50) return $query->get();
                if($query->recent()->count() < 50) return $query->recent()->get();
                return $query->recentAgain()->get();
            }
            $query = Order::with(['items'])->where(function($Q)use($latest_date){
                $Q->where('created_at','>',$latest_date)->orWhere(function($QQ)use($latest_date){
                    $QQ->where('created_at','<=',$latest_date)->where('updated_at','>',$latest_date);
                });
            });
            if($query->count() < 50) return $query->get();
            if($query->recent()->count() < 50) return $query->recent()->get();
            return $query->recentAgain()->get();
        }
        return [];
    }
}
