<?php

namespace Milestone\Rayacom\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class LeaveRecord extends Model
{
  protected $table = 'leaverecord';
  protected $guarded = [];


    protected static function boot() {
        parent::boot();
        static::creating(function ($model) {
          $model->executive = session('auth_data');
        });
        static::saved(function(){
            $max = DB::table('leaverecord')->select(DB::raw('max(updated_at) max'))->value('max');
            Cache::forever(rayacom_config('cache_key.db_leaves_last_updated_time'),$max);
        });
    }

    public function scopeRecent($q){
        $q->where('updated_at','>',now()->subMonths(1)->toDateTimeString());
    }
    public function scopeRecentAgain($q){

    }

}
