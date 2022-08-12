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
        $id = request('id');
        $name = request('name');
        if($id >0){
          $master = Master::find($id);
        }else{
          $master= new Master();
          $master->master = MasterData::where('name','ITEM')->value('id');
        }
        $master->name = $name;
        $master->save();
        return $master;
    }

    public function store(){
        $Item = new Item(request()->only('name'));
        $Item->save();
    }
}
