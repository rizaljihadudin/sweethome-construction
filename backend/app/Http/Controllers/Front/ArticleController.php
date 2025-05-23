<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Article::where('status', 1)->orderBy('created_at', 'desc')->get();
        return response()->json([
            'status'    => true,
            'data'      => $data,
            'message'   => 'Succes get all Articles'
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function latestArticles(Request $request)
    {
        $data = Article::where('status', 1)
                    ->take($request->get('limit'))
                    ->orderBy('created_at', 'desc')
                    ->get();

        return response()->json([
            'status'    => true,
            'data'      => $data,
            'message'   => 'Succes get latest Articles'
        ]);
    }
}
