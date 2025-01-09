<?php

namespace App\Http\Controllers;

abstract class Controller
{
    public function index()
    {
        return view('index');
    }
    public function aboutHelp()
    {
        return view('about-help');
    }

    public function comparison()
    {
        return view('comparison');
    }

    public function mapInspect()
    {
        return view('map-inspect');
    }
    
}
