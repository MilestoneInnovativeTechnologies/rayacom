<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Milestone\Rayacom\Models\Area;
use Milestone\Rayacom\Models\Master;

class AreaController extends Controller
{
    public function store(){
      $data = new Area(request()->only('name'));
      $data->save();
    }
    public function update(){
      $data = Master::find(request('id'));
      $data->name = request('name');
      $data->save();
      return $data;
    }
}
