<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{

    # return data all active services
    public function index() {
        $services = Service::where('status', 1)->orderBy('created_at', 'desc')->get();
        return $services;
    }

    # return latest active services
    public function latestServices(Request $request) {
        $services = Service::where('status', 1)
                        ->take($request->get('limit'))
                        ->orderBy('created_at', 'desc')
                        ->get();
        // return $services;

        return response()->json([
            'status'    => true,
            'data'      => $services,
            'message'   => 'Succes get latest services'
        ]);
    }
}
