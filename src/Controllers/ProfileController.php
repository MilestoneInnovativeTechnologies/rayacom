<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Milestone\Rayacom\Models\Master;

class ProfileController extends Controller
{
  public function update(Request $req){
    $id = request('id');
    $master = Master::find($req->id);
    $master->name=$req->name;
    if(request()->filled('name') && $master->name === request('name')) $master->update(request()->except('name'));
    else $master->update(request()->all());


  }
}
