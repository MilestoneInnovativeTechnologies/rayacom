<?php

namespace Milestone\Rayacom\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Master
{
  public function __construct(array $attributes = [])
  {
    parent::__construct($attributes);
    self::$MASTER = MasterData::where('name','CUSTOMER')->value('id');
  }
}
