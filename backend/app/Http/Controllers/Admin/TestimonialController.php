<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TempImage;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\File;

class TestimonialController extends Controller
{
    public function index()
    {
        $data = Testimonial::orderBy('created_at', 'desc')->get();
        return response()->json([
            'status'    => true,
            'data'      => $data,
            'message'   => 'Testimonials Fetched Successfully'
        ]);
    }

    public function show(Testimonial $testimonial)
    {
        if($testimonial == null){
            return response()->json([
                'status'    => false,
                'message'   => 'Testimonial not found!'
            ]);
        }

        return response()->json([
            'status'    => true,
            'data'      => $testimonial,
            'message'   => 'Testimonial Show Successfully'
        ]);
    }

    public function store(Request $request)
    {
        $validated = Validator::make($request->all(), [
            'testimonial'   => 'required',
            'message'       => 'required',
        ]);

        if($validated->fails()){
            return response()->json([
                'status'    => false,
                'message'   => $validated->errors()
            ]);
        }

        $testimonial = new Testimonial();
        $testimonial->testimonial   = $request->testimonial;
        $testimonial->message       = $request->message;
        $testimonial->save();

        #upload Image
        if($request->imageId){
            $tempImage  = TempImage::find($request->imageId);

            #Create Image
            if($tempImage != null){
                $extArray   = explode('.', $tempImage->name);
                $ext        = last($extArray);

                $fileName   = strtotime('now').$testimonial->id.'.'.$ext;

                #created small thumbnail
                $srcPath    = public_path('uploads/temp/'.$tempImage->name);
                $destPath   = public_path('uploads/testimonials/small/'.$fileName);
                $manager    = new ImageManager(Driver::class);
                $image      = $manager->read($srcPath);
                $image->coverDown(500, 600);
                $image->save($destPath);


                #created large thumbnail
                $destPath   = public_path('uploads/testimonials/large/'.$fileName);
                $manager    = new ImageManager(Driver::class);
                $image      = $manager->read($srcPath);
                $image->scaleDown(1200);
                $image->save($destPath);


                $testimonial->image = $fileName;
                $testimonial->save();

            }
        }

        return response()->json([
            'status'    => true,
            'message'   => 'Testimonial added successfully'
        ]);
    }

    public function update(Request $request, Testimonial $testimonial)
    {
        if($testimonial == null){
            return response()->json([
                'status'    => false,
                'message'   => 'Testimonial not found!'
            ]);
        }

        $validated = Validator::make($request->all(), [
            'testimonial'   => 'required',
            'message'       => 'required',
        ]);

        if($validated->fails()){
            return response()->json([
                'status'    => false,
                'message'   => $validated->errors()
            ]);
        }else{
            $testimonial->testimonial   = $request->testimonial;
            $testimonial->message       = $request->message;
            $testimonial->status        = $request->status;
            $testimonial->designation   = $request->designation;
            $testimonial->save();

            #update image / upload image
            if($request->imageId){
                $oldImage   = $testimonial->image;
                $tempImage  = TempImage::find($request->imageId);

                if($tempImage != null){
                    $extArray   = explode('.', $tempImage->name);
                    $ext        = last($extArray);

                    $fileName   = strtotime('now').$testimonial->id.'.'.$ext;

                    #created small thumbnail
                    $srcPath    = public_path('uploads/temp/'.$tempImage->name);
                    $destPath   = public_path('uploads/testimonials/small/'.$fileName);
                    $manager    = new ImageManager(Driver::class);
                    $image      = $manager->read($srcPath);
                    $image->coverDown(500, 600);
                    $image->save($destPath);


                    #created large thumbnail
                    $destPath   = public_path('uploads/testimonials/large/'.$fileName);
                    $manager    = new ImageManager(Driver::class);
                    $image      = $manager->read($srcPath);
                    $image->scaleDown(1200);
                    $image->save($destPath);


                    $testimonial->image = $fileName;
                    $testimonial->save();

                    if($oldImage != ''){
                        File::delete(public_path('uploads/testimonials/large/'.$oldImage));
                        File::delete(public_path('uploads/testimonials/small/'.$oldImage));
                    }

                }
            }


            return response()->json([
                'status'    => true,
                'message'   => 'Testimonial updated successfully'
            ]);
        }
    }


    public function destroy(Testimonial $testimonial)
    {
        if($testimonial == null){
            return response()->json([
                'status'    => false,
                'message'   => 'Testimonial not found!'
            ]);
        }

        $oldImage = $testimonial->image;
        if($oldImage != ''){
            File::delete(public_path('uploads/testimonials/large/'.$oldImage));
            File::delete(public_path('uploads/testimonials/small/'.$oldImage));
        }

        $testimonial->delete();

        return response()->json([
            'status'    => true,
            'message'   => 'Testimonial deleted successfully'
        ]);
    }


}
