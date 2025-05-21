<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    # return data all active services
    public function index() {
        $data = Project::where('status', 1)->orderBy('created_at', 'desc')->get();

        return response()->json([
            'status'    => true,
            'data'      => $data,
            'message'   => 'Succes get all Projects'
        ]);
    }

    # return latest active services
    public function latestProjects(Request $request) {
        $data = Project::where('status', 1)
                        ->take($request->get('limit'))
                        ->orderBy('created_at', 'desc')
                        ->get();

        return response()->json([
            'status'    => true,
            'data'      => $data,
            'message'   => 'Succes get latest Projects'
        ]);
    }
}
