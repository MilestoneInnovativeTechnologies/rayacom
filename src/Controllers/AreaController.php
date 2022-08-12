<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Milestone\Rayacom\Models\Area;
use Milestone\Rayacom\Models\Master;

class AreaController extends Controller
{
    public function store(){
      $Item = new Area(request()->only('name'));
      $Item->save();
    }
    public function update(){
      $master = Master::find(request('id'));
      $master->name = request('name');
      $master->save();
      return $master;
    }
}
