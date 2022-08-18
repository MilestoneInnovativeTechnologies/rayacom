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
        Schema::create('leaverecord', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('executive')->index();
            $table->dateTime('start_date');
            $table->dateTime('end_date')->nullable();
            $table->string('description',512)->nullable();
            $table->enum('status',['New','Progress','Accepted','Rejected'])->default('New');
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
        Schema::dropIfExists('leaverecord');
    }
};
