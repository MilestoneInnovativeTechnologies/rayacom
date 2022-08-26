<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Milestone\Rayacom\Models\SalesExecutive;


class ExecutiveController extends Controller
{
  public function store(){
    $data = new SalesExecutive(request()->only(['name','password','email','phone','areas']));
    $data->save();
    return $data;
  }
}
