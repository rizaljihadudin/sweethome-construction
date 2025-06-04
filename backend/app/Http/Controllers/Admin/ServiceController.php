<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $query = Service::orderBy('created_at', 'desc');
        if ($request->has('search') && !empty($request->search)) {
            $query->where('title', 'like', '%' . $request->search . '%');
        }

        $data = $query->get();

        return response()->json([
            'status'    => true,
            'data'      => $data,
            'message'   => 'Services Fetched Successfully'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = Validator::make([
            'title' => $request->title,
            'slug'  => Str::slug($request->slug),
        ], [
            'title' => 'required',
            'slug'  => 'required|unique:services,slug',
        ]);

       if($validate->fails()){
            return response()->json([
                'status'    => false,
                'errors'    => $validate->errors(),
                'message'   => 'Validation Error'
            ]);
       }else{
           $model               = new Service();
           $model->title        = $request->title;
           $model->slug         = Str::slug($request->slug);
           $model->short_desc   = $request->short_desc;
           $model->content      = $request->content;
           $model->status       = $request->status;
           $model->save();

            #save temp Image
            if($request->imageId){
                $tempImage  = TempImage::find($request->imageId);

                #Create Image
                if($tempImage != null){
                    $extArray   = explode('.', $tempImage->name);
                    $ext        = last($extArray);

                    $fileName   = strtotime('now').$model->id.'.'.$ext;

                    #created small thumbnail
                    $srcPath    = public_path('uploads/temp/'.$tempImage->name);
                    $destPath   = public_path('uploads/services/small/'.$fileName);
                    $manager    = new ImageManager(Driver::class);
                    $image      = $manager->read($srcPath);
                    $image->coverDown(500, 600);
                    $image->save($destPath);


                    #created large thumbnail
                    $destPath   = public_path('uploads/services/large/'.$fileName);
                    $manager    = new ImageManager(Driver::class);
                    $image      = $manager->read($srcPath);
                    $image->scaleDown(1200);
                    $image->save($destPath);


                    $model->image = $fileName;
                    $model->save();

                }
            }

            return response()->json([
                'status'    => true,
                'message'   => 'Services Created Successfully'
            ]);
       }

    }

    /**
     * Display the specified resource.
     */
    public function show(Service $service)
    {
        if($service == null){
            return response()->json([
                'status'    => false,
                'message'   => 'Service not found!'
            ]);
        }

        return response()->json([
            'status'    => true,
            'data'      => $service,
            'message'   => 'Services Show Successfully'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Service $service)
    {
        if($service == null){
            return response()->json([
                'status'    => false,
                'message'   => 'Service not found!'
            ]);
        }
        $validate = Validator::make([
            'title' => $request->title,
            'slug'  => Str::slug($request->slug),
        ], [
            'title' => 'required',
            'slug'  => 'required|unique:services,slug,'.$service->id.',id',
        ]);

       if($validate->fails()){
            return response()->json([
                'status'    => false,
                'errors'    => $validate->errors(),
                'message'   => 'Validation Error'
            ]);
       }else{
            $service->title        = $request->title;
            $service->slug         = Str::slug($request->slug);
            $service->short_desc   = $request->short_desc;
            $service->content      = $request->content;
            $service->status       = $request->status;
            $service->save();

            #save temp Image
            if($request->imageId){
                $oldImage   = $service->image;
                $tempImage  = TempImage::find($request->imageId);

                if($tempImage != null){
                    $extArray   = explode('.', $tempImage->name);
                    $ext        = last($extArray);

                    $fileName   = strtotime('now').$service->id.'.'.$ext;

                    #created small thumbnail
                    $srcPath    = public_path('uploads/temp/'.$tempImage->name);
                    $destPath   = public_path('uploads/services/small/'.$fileName);
                    $manager    = new ImageManager(Driver::class);
                    $image      = $manager->read($srcPath);
                    $image->coverDown(500, 600);
                    $image->save($destPath);


                    #created large thumbnail
                    $destPath   = public_path('uploads/services/large/'.$fileName);
                    $manager    = new ImageManager(Driver::class);
                    $image      = $manager->read($srcPath);
                    $image->scaleDown(1200);
                    $image->save($destPath);


                    $service->image = $fileName;
                    $service->save();

                    if($oldImage != ''){
                        File::delete(public_path('uploads/services/large/'.$oldImage));
                        File::delete(public_path('uploads/services/small/'.$oldImage));
                    }

                }
            }

            return response()->json([
                'status'    => true,
                'message'   => 'Services Updated Successfully'
            ]);
       }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        if($service == null){
            return response()->json([
                'status'    => false,
                'message'   => 'Service not found!'
            ]);
        }

        #delete image service
        $oldImage = $service->image;
        if($oldImage != ''){
            File::delete(public_path('uploads/services/large/'.$oldImage));
            File::delete(public_path('uploads/services/small/'.$oldImage));
        }

        #delete service data
        $service->delete();

        #return response
        return response()->json([
            'status'    => true,
            'message'   => 'Services Deleted Successfully'
        ]);
    }


    public function searchData(Request $request){
        $data = Service::where('title', 'like', '%'.$request->keyword.'%')->get();
        return response()->json([
            'status'    => true,
            'data'      => $data,
            'message'   => 'Services Fetched Successfully'
        ]);
    }
}
