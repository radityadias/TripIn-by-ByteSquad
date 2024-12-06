<?php

use App\Http\Controllers\BookingController;
use App\Http\Controllers\HomeController;
use illuminate\Support\Facades\Route;

//Rute jika sudah masuk ke aplikasi
Route::group(['prefix' => 'home', 'middleware' => 'isLogin'], function(){
    Route::get('/', [HomeController::class, 'homeIndex'])->name('home');
});

Route::get('/ticket', [HomeController::class, 'ticketIndex']);
Route::get('/boarding-ticket', [BookingController::class, 'boardingTicketIndex'])->name('boarding');

