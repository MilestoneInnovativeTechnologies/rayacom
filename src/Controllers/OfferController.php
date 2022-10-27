<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;



class OfferController extends Controller
{
  public function store(){
    $data = new Review(request()->only(['item', 'minimum_quantity', 'offer_quantity', 'type', 'customers', 'status']));
    $data->save();
    return $data;
  }

}
