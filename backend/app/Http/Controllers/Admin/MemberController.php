<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Member;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\File;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Member::orderBy('created_at', 'desc')->get();

        return response()->json([
            'success'   => true,
            'data'      => $data,
            'message'   => 'Get all data member'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = Validator::make($request->all(), [
           'name'       => 'required',
           'job_title'  => 'required',
        ]);

        if ($validated->fails()){
            return response()->json([
                'success'   => false,
                'message'   => $validated->errors()
            ]);
        } else {
            $member                 = new Member();
            $member->name           = $request->name;
            $member->job_title      = $request->job_title;
            $member->linkedin_url   = $request->linkedin_url;
            $member->save();

            #upload image member
            if($request->imageId){
                $tempImage  = TempImage::find($request->imageId);

                #Create Image
                if($tempImage != null){
                    $extArray   = explode('.', $tempImage->name);
                    $ext        = last($extArray);

                    $fileName   = strtotime('now').$member->id.'.'.$ext;

                    #created small thumbnail
                    $srcPath    = public_path('uploads/temp/'.$tempImage->name);
                    $destPath   = public_path('uploads/members/'.$fileName);
                    $manager    = new ImageManager(Driver::class);
                    $image      = $manager->read($srcPath);
                    $image->coverDown(400, 500);
                    $image->save($destPath);

                    $member->image = $fileName;
                    $member->save();

                }
            }


            return response()->json([
                'success'   => true,
                'data'      => $member,
                'message'   => 'Member created successfully'
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Member::find($id);

        if($data == null){
            return response()->json([
                'success'   => false,
                'message'   => 'Member not found'
            ]);
        }else{
            return response()->json([
                'success'   => true,
                'data'      => $data,
                'message'   => 'Get data member'
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
    public function update(Request $request, string $id)
    {
        $member = Member::find($id);

        if ($member == null){
            return response()->json([
                'success'   => false,
                'message'   => 'Member not found'
            ]);
        } else {
            $validated = Validator::make($request->all(), [
                'name'       => 'required',
                'job_title'  => 'required',
            ]);

            if ($validated->fails()){
                return response()->json([
                    'success'   => false,
                    'message'   => $validated->errors()
                ]);
            } else {
                $member->name           = $request->name;
                $member->job_title      = $request->job_title;
                $member->linkedin_url   = $request->linkedin_url;
                $member->save();

                #upload image member
                if($request->imageId){
                    $tempImage  = TempImage::find($request->imageId);
                    $oldImage   = $member->image;

                    #Create Image
                    if($tempImage != null){
                        $extArray   = explode('.', $tempImage->name);
                        $ext        = last($extArray);

                        $fileName   = strtotime('now').$member->id.'.'.$ext;

                        #created small thumbnail
                        $srcPath    = public_path('uploads/temp/'.$tempImage->name);
                        $destPath   = public_path('uploads/members/'.$fileName);
                        $manager    = new ImageManager(Driver::class);
                        $image      = $manager->read($srcPath);
                        $image->coverDown(400, 500);
                        $image->save($destPath);

                        $member->image = $fileName;
                        $member->save();

                        if($oldImage != ''){
                            File::delete(public_path('uploads/members/'.$oldImage));
                        }

                    }
                }


                return response()->json([
                    'success'   => true,
                    'data'      => $member,
                    'message'   => 'Member Updated successfully'
                ]);
            }
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $member = Member::find($id);

        if($member == null){
            return response()->json([
                'success'   => false,
                'message'   => 'Member not found'
            ]);
        }else{

            $oldImage = $member->image;
            if($oldImage != ''){
                File::delete(public_path('uploads/members/'.$oldImage));
            }

            $member->delete();
            return response()->json([
                'success'   => true,
                'message'   => 'Member Deleted Successfully'
            ]);
        }
    }
}
