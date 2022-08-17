<?php

namespace Milestone\Rayacom\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesExecutive extends Model
{
  public function __construct(array $attributes = [])
  {
    parent::__construct($attributes);
    self::$MASTER = MasterData::where('name','SALES_EXECUTIVE')->value('id');
  }
}
