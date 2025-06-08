<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Member;
use Illuminate\Http\Request;

class MemberController extends Controller
{
    public function index(){

        $data = Member::where('status', '1')
                        ->orderBy('created_at', 'desc')
                        ->get();

        return response()->json([
            'success'   => true,
            'data'      => $data,
            'message'   => 'Get all data member'
        ]);

    }
}
