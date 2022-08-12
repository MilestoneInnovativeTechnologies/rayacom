<?php

namespace Milestone\Rayacom\Models;

use Illuminate\Database\Eloquent\Model;

class Item extends Master
{
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        self::$MASTER = MasterData::where('name','ITEM')->value('id');
    }
}
