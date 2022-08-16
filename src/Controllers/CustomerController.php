<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Milestone\Rayacom\Models\Customer;
use Milestone\Rayacom\Models\Master;

class CustomerController extends Controller
{
    public function store(){
      $data = new Customer(request()->only(['name','password','email','area','address']));
      $data->save();
      return $data;
    }
    public function update(){
      $data = Master::find(request('id'));
      $data->name = request('name');
      $data->password = request('password');
      $data->email = request('email');
      $data->area = [request('area')];
      $data->address = request('address');
      $data->save();
      return $data;
    }


}
