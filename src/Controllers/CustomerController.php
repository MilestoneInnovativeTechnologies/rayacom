<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Milestone\Rayacom\Models\Customer;
use Milestone\Rayacom\Models\Master;

class CustomerController extends Controller
{
    public function store(){
      $data = new Customer(request()->only(['name','password','email','phone', 'area','address']));
      $data->save();
      return $data;
    }
}
