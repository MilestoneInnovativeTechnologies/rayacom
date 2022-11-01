<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Milestone\Rayacom\Models\Item;
use Milestone\Rayacom\Models\Master;
use Milestone\Rayacom\Models\Offer;
use Illuminate\Support\Facades\Cache;
use Milestone\Rayacom\Models\MasterData;

class ItemController extends Controller
{
  public function store(){
    $Item = new Item(request()->only('name'));
    $Item->save();
  }

    public function update(){
    $master = Master::find(request('id'));
    $master->name = request('name');
    $master->save();
    return $master;
    }








}
