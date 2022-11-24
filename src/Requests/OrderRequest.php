<?php

namespace Milestone\Rayacom\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Milestone\Rayacom\Models\Order;
use Milestone\Rayacom\Models\OrderItem;

class  OrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
        $user = $this->auth_user(); $customer = $this->input('customer');
        $user_areas = []; $customer_areas = [];
        return !empty(array_intersect($user_areas,$customer_areas));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'customer' => 'required',
            'items' => 'required',
        ];
    }

    public function prepareForValidation()
    {
        $this->merge([
            'customer' => session('auth_data'),
            'date' => $this->input('date',now()->toDateTimeString()),
            'status' => 'New',
            'created_user' => $this->auth_user(),
        ]);
    }

    public function auth_user()
    {
        return $this->header('auth_data');
    }

    public $order = null;
    public function store(){
        $this->order = Order::create($this->only(['date','customer','status','narration','created_user']));
        return $this;
    }

    public function store_items(){
        $items = [];
        foreach ($this->input('items') as $item){
            $items[] = new OrderItem([
                'item' => $item['item'],
                'quantity' => $item['quantity'],
                'foc' => $item['foc'] ?: 0,
                'quantity_modified' => $item['quantity'],
                'status' => 'Confirmed',
                'created_user' => $this->auth_user(),
            ]);
        }
        $this->order->items()->saveMany($items);
        return $this;
    }
}
