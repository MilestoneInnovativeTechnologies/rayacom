<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Milestone\Rayacom\Models\Item;
use Milestone\Rayacom\Models\Master;
use Milestone\Rayacom\Models\MasterData;

class ItemController extends Controller
{
    public function update(){
        $master = Master::find(request('id'));
        $master->name = request('name');
        $master->save();
        return $master;
    }

    public function store(){
        $Item = new Item(request()->only('name'));
        $Item->save();
    }
}
