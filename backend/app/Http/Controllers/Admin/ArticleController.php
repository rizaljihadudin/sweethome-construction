<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\TempImage;
use Illuminate\Contracts\Concurrency\Driver;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Article::orderBy('created_at', 'desc')->get();

        return response()->json([
            'success'   => true,
            'data'      => $data,
            'message'   => 'Get All data Article'
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->merge([
            'slug' => Str::slug($request->slug)
        ]);
        $validate = Validator::make($request->all(), [
            'title'     => 'required',
            'slug'      => 'required|unique:articles,slug',
        ]);

        if($validate->fails()){
            return response()->json([
                'success'   => false,
                'error'     => $validate->errors(),
                'message'   => 'Validation Error'
            ]);
        }else{

            #insert data
            $article        = new Article();
            $article->title = $request->title;
            $article->slug  = Str::slug($request->slug);
            $article->author = $request->author;
            $article->content = $request->content;
            $article->status = $request->status;
            $article->save();

            #save Image article
            if($request->imageId){
                $tempImage  = TempImage::find($request->imageId);

                if($tempImage != null){
                    $extArray   = explode('.', $tempImage->name);
                    $ext        = last($extArray);

                    $fileName   = strtotime('now').$article->id.'.'.$ext;

                    #created small thumbnail
                    $srcPath    = public_path('uploads/temp/'.$tempImage->name);
                    $destPath   = public_path('uploads/articles/small/'.$fileName);
                    $manager    = new ImageManager(Driver::class);
                    $image      = $manager->read($srcPath);
                    $image->coverDown(500, 600);
                    $image->save($destPath);


                    #created large thumbnail
                    $destPath   = public_path('uploads/articles/large/'.$fileName);
                    $manager    = new ImageManager(Driver::class);
                    $image      = $manager->read($srcPath);
                    $image->scaleDown(1200);
                    $image->save($destPath);


                    $article->image = $fileName;
                    $article->save();

                }
            }

            return response()->json([
                'success'   => true,
                'message'   => 'Article Created Successfully'
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        if($article == null){
            return response()->json([
                'success'   => false,
                'message'   => 'Article Not Found'
            ]);
        }else{
            return response()->json([
                'success'   => true,
                'data'      => $article,
                'message'   => 'Article Show Successfully'
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Article $article)
    {
        if($article == null){
            return response()->json([
                'success'   => false,
                'message'   => 'Article Not Found'
            ]);
        }

        $request->merge([
            'slug' => Str::slug($request->slug)
        ]);
        $validate = Validator::make($request->all(), [
            'title'     => 'required',
            'slug'      => 'required|unique:articles,slug,'.$article->id,
        ]);

        if($validate->fails()){
            return response()->json([
                'success'   => false,
                'error'     => $validate->errors(),
                'message'   => 'Validation Error'
            ]);
        }else{

            #update data
            $article->title     = $request->title;
            $article->slug      = Str::slug($request->slug);
            $article->author    = $request->author;
            $article->content   = $request->content;
            $article->status    = $request->status;
            $article->save();

            #update Image article
            if($request->imageId){
                $oldImage   = $article->image;
                $tempImage  = TempImage::find($request->imageId);

                if($tempImage != null){
                    $extArray   = explode('.', $tempImage->name);
                    $ext        = last($extArray);

                    $fileName   = strtotime('now').$article->id.'.'.$ext;

                    #created small thumbnail
                    $srcPath    = public_path('uploads/temp/'.$tempImage->name);
                    $destPath   = public_path('uploads/articles/small/'.$fileName);
                    $manager    = new ImageManager(Driver::class);
                    $image      = $manager->read($srcPath);
                    $image->coverDown(500, 600);
                    $image->save($destPath);


                    #created large thumbnail
                    $destPath   = public_path('uploads/articles/large/'.$fileName);
                    $manager    = new ImageManager(Driver::class);
                    $image      = $manager->read($srcPath);
                    $image->scaleDown(1200);
                    $image->save($destPath);


                    $article->image = $fileName;
                    $article->save();

                    if($oldImage != ''){
                        File::delete(public_path('uploads/articles/large/'.$oldImage));
                        File::delete(public_path('uploads/articles/small/'.$oldImage));
                    }

                }
            }

            return response()->json([
                'success'   => true,
                'message'   => 'Article Updated Successfully'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $article = Article::find($id);

        if($article == null){
            return response()->json([
                'success'   => false,
                'message'   => 'Article Not Found'
            ]);
        }else{

            #delete Article image
            $oldImage   = $article->image;
            if($oldImage != ''){
                File::delete(public_path('uploads/articles/large/'.$oldImage));
                File::delete(public_path('uploads/articles/small/'.$oldImage));
            }

            $article->delete();
            return response()->json([
                'success'   => true,
                'message'   => 'Article Deleted Successfully'
            ]);
        }
    }
}
