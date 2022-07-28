<?php

namespace Milestone\Rayacom\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class Order extends Model
{

    protected static function booted() {
        parent::booted();
        static::created(function(){
            $max = DB::table('orders')->select(DB::raw('max(updated_at) max'))->value('max');
            Cache::forever(rayacom_config('cache_key.db_orders_last_updated_time'),$max);
        });
        static::addGlobalScope('active', function (Builder $builder) {

        });
    }

    protected $guarded = [];

    public function items(){
        return $this->hasMany(OrderItem::class,'order','id');
    }
}
