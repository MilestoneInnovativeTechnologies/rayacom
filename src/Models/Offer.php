<?php

namespace Milestone\Rayacom\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class Offer extends Model
{
    protected $guarded = [];

    protected static function booted() {
        parent::booted();
        static::saved(function(){
            $max = DB::table('offers')->select(DB::raw('max(updated_at) max'))->value('max');
            Cache::forever(rayacom_config('cache_key.db_offers_last_updated_time'),$max);
        });
    }

    public function item(){
        return $this->belongsTo(Item::class,'item','id');
    }
}
