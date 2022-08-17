<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Milestone\Rayacom\Models\Master;
use Milestone\Rayacom\Models\SalesExecutive;

use function Sodium\add;

class AddController extends Controller
{
  public function store(){
    $data = new SalesExecutive(request()->only(['name','password','email','phone','area']));
    $data->save();
    return $data;
  }
  public function update(){
    $data = Master::find(request('id'));
    $data->name = request('name');
    $data->password = request('password');
    $data->email = request('email');
    $data->area = [request('area')];
    $data->phone = [request('phone')];
    $data->save();
    return $data;
  }


}
