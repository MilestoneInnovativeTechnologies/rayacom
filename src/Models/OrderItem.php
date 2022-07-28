<?php

namespace Milestone\Rayacom\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class OrderItem extends Model
{
    protected static function booted() {
        parent::booted();
        static::created(function(){
            $max = DB::table('orders')->select(DB::raw('max(updated_at) max'))->value('max');
            Cache::forever(rayacom_config('cache_key.db_orders_last_updated_time'),$max);
        });
    }

    protected $guarded = [];
    protected $touches = ['order'];

    public function order(){
        return $this->belongsTo(Order::class,'order','id');
    }
}
