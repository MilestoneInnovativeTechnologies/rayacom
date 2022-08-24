<?php

namespace Milestone\Rayacom\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class Review extends Model
{
  protected $table = 'reviews';

  protected $fillable = [
    'customer',
    'type',
    'typeid',
    'comment',
    'status'
  ];

  protected static function boot() {
      parent::boot();
      static::creating(function ($model) {
          $model->customer = session('auth_data');
      });
      static::saved(function(){
          $max = DB::table('reviews')->select(DB::raw('max(updated_at) max'))->value('max');
          Cache::forever(rayacom_config('cache_key.db_reviews_last_updated_time'),$max);
      });

  }

    public function scopeRecent($q){
        $q->where('updated_at','>',now()->subMonths(1)->toDateTimeString())->orWhere('status','New');
    }
    public function scopeRecentAgain($q){
        $q->where('updated_at','>',now()->subDays(14)->toDateTimeString())->orWhere('status','New');
    }

}
