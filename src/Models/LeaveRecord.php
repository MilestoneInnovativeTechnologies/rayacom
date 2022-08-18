<?php

namespace Milestone\Rayacom\Models;

use Illuminate\Database\Eloquent\Model;

class LeaveRecord extends Model
{
  protected $table = 'leaverecord';

  protected $fillable = [
    'executive',
    'start_date',
    'end_date',
    'description'
  ];
}
