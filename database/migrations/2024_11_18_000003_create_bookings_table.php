<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id('booking_id')->autoIncrement();
            $table->integer('seat_total');
            $table->timestamp('booking_time');
            $table->string('status');
            $table->decimal('price', 10, 2);
            $table->string('booking_code');
            $table->unsignedBigInteger('user_id');
            $table->json('seat_number');

            $table->foreign('user_id')->references('user_id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
