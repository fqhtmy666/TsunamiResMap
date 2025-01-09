<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::get('/comparison', function () {
    return view('comparison');
});

Route::get('/map-inspect', function () {
    return view('map-inspect');
});

Route::get('/about-help', function () {
    return view('about-help');
});

Route::get('/sidebar', function () {
    return view('sidebar');
});