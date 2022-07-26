<?php

namespace Milestone\Rayacom\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class Order extends Model
{
    protected $guarded = [];

    protected static function booted() {
        parent::booted();
        static::saved(function(){
            $max = DB::table('orders')->select(DB::raw('max(updated_at) max'))->value('max');
            Cache::forever(rayacom_config('cache_key.db_orders_last_updated_time'),$max);
        });
        static::addGlobalScope('active', function (Builder $builder) {

        });
    }

    public function scopeRecent($q){
        $q->where('updated_at','>',now()->subMonths(1)->toDateTimeString())
            ->orWhereNotIn('status',['Delivered','Cancelled']);
    }
    public function scopeRecentAgain($q){
        $q->whereNotIn('status',['Delivered','Cancelled'])->where();
    }


    public function items(){
        return $this->hasMany(OrderItem::class,'order','id');
    }
}
