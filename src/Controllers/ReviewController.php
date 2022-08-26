<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Milestone\Rayacom\Models\Order;
use Milestone\Rayacom\Models\Review;
use Milestone\Rayacom\Models\SalesExecutive;


class ReviewController extends Controller
{
  public function store(){
    $data = new Review(request()->only(['type', 'typeid', 'comment']));
    $data->save();
    return $data;
  }

  public function status(){
    $id = request('id');
    $status = request('status');
    $data = Review::find($id);
    $data->status = $status;
    $data->save();
    return $data;
  }

  public static function reviews(){
      $latest_date = request()->header('Latest-Date','2000-01-01 00:00:01') ?: '2000-01-01 00:00:01';
      if(Carbon::parse($latest_date)->lessThan(Carbon::parse(Cache::get(rayacom_config('cache_key.db_reviews_last_updated_time'))))){
          $master = session('auth_type'); $auth_data = session('auth_data');
          if($master === 'CUSTOMER') {
              $query = Review::where(['customer' => $auth_data])->where(function($Q)use($latest_date){
                  $Q->where('created_at','>',$latest_date)->orWhere(function($QQ)use($latest_date){
                      $QQ->where('created_at','<=',$latest_date)->where('updated_at','>',$latest_date);
                  });
              });
              if($query->count() < 50) return $query->get();
              if($query->recent()->count() < 50) return $query->recent()->get();
              return $query->recentAgain()->get();
          }
          if($master === 'SALES_EXECUTIVE') return [];
          $query = Review::where(function($Q)use($latest_date){
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
