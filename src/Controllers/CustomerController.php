<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Milestone\Rayacom\Models\Customer;
use Milestone\Rayacom\Models\Master;

class CustomerController extends Controller
{
    public function update(){
        $master = Master::find(request('id'));
        $master->name = request('name');
        $master->save();
        return $master;
    }

    public function store(){
        $Item = new Customer(request()->only('name'));
        $Item->save();
    }
}
