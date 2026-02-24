<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class AboutController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('about');
    }
}
