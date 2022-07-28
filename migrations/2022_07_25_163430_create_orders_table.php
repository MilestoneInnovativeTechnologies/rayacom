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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->dateTime('date')->useCurrent()->index();
            $table->bigInteger('customer')->index();
            $table->string('narration',512)->nullable();
            $table->enum('status',['New','Viewed','Accepted','Packed','Dispatched','Delivered','Cancelled'])->default('New');
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
        Schema::dropIfExists('orders');
    }
};
