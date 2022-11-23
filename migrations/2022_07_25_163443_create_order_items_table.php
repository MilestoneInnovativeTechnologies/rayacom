<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('order')->index();
            $table->bigInteger('item')->index();
            $table->unsignedInteger('quantity')->default(1);
            $table->Integer('foc')->default(0);
            $table->unsignedInteger('quantity_modified')->default(1);
            $table->enum('status',['Confirmed','Packed','Dispatched','Delivered','Pending','Cancelled'])->default('Confirmed');
            $table->string('cancel_comment',256)->nullable();
            $table->bigInteger('created_user')->index();
            $table->bigInteger('updated_user')->index()->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_items');
    }
};
