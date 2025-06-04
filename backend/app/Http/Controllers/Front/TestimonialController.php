<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    public function index()
    {
        $data = Testimonial::where('status', 1)
                            ->orderBy('created_at', 'desc')
                            ->get();

        return response()->json([
            'status'    => true,
            'data'      => $data,
            'message'   => 'Succes get all testimonials'
        ]);
    }
}
