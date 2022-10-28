<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Milestone\Rayacom\Models\Offer;


class OfferController extends Controller
{
  public function store(){
    $data = new Offer(request()->only(['item', 'minimum_quantity', 'offer_quantity', 'type', 'customers', 'status']));
    $data->save();
    return $data;
  }

}
