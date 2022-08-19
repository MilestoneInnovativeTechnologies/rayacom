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
}
