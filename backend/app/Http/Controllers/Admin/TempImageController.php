<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class TempImageController extends Controller
{
    public function store(Request $request)
    {

        $validate = Validator::make($request->all(), [
            'image' => 'required|file|mimes:jpeg,png,jpg,gif,svg',
        ],[
            'image.required' => 'Image is required',
            'image.image'    => 'Image must be a file of type: jpeg, png, jpg, gif, svg.',

        ]);

        if($validate->fails()){
            return response()->json([
                'status'    => false,
                'errors'    => $validate->errors(),
                'message'   => 'Validation Error',
            ]);
        }

        $image = $request->image;
        if(!empty($image)){
            $ext       = $image->getClientOriginalExtension();
            $imageName = strtotime('now').'.'.$ext;

            // Save Image in temp image table
            $model          = new TempImage();
            $model->name    = $imageName;
            $model->save();

            $srcPath = public_path('uploads/temp/'.$imageName);
            $destPath = public_path('uploads/temp/thumb/'.$imageName);

            // Save image to temp folder
            $image->move(public_path('uploads/temp'), $imageName);

            // Create small thumbnail here
            $manager    = new ImageManager(Driver::class);
            $image      = $manager->read($srcPath);
            $image->coverDown(300, 300);
            $image->save($destPath);


            return response()->json([
                'status'    => true,
                'data'      => $model,
                'message'   => 'Image uploaded successfully.',
            ]);
        }
    }
}
