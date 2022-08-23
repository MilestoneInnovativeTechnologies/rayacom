<?php

namespace Milestone\Rayacom\Models;

use Illuminate\Database\Eloquent\Model;

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
  protected static function boot()
  {
    parent::boot();
    static::creating(function ($model) {
        $model->customer = session('auth_data');
    });
  }
}
