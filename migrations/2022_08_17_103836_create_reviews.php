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
        Schema::create('reviews', function (Blueprint $table) {
          $table->id();
          $table->bigInteger('customer')->index();
          $table->enum('type',['Product','Order','SalesExecutive'])->default('Product');
          $table->bigInteger('typeid');
          $table->string('comment',512)->nullable();
          $table->enum('status',['New','Viewed'])->default('New');
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
        Schema::dropIfExists('reviews');
    }
};
