<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;
use Illuminate\Support\Facades\File;

class ProjectController extends Controller
{
    #this method will return all data projects
    public function index() {
        $projects = Project::orderBy('created_at', 'desc')->get();

        return response()->json([
            'status'    => true,
            'data'      => $projects,
            'message'   => 'Projects Fetched Successfully'
        ]);
    }

    #this method will store new project
    public function store(Request $request) {
        #merge slug request
        $request->merge([
            'slug' => Str::slug($request->slug),
        ]);

        $validate = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:projects,slug',
        ]);

        if($validate->fails()){
            return response()->json([
                'status'    => false,
                'errors'    => $validate->errors(),
                'message'   => 'Validation Error'
            ]);
        }else{
            $model                      = new Project();
            $model->title               = $request->title;
            $model->slug                = Str::slug($request->slug);
            $model->short_desc          = $request->short_desc;
            $model->content             = $request->content;
            $model->construction_type   = $request->construction_type;
            $model->sector              = $request->sector;
            $model->location            = $request->location;
            $model->status              = $request->status;
            $model->save();

            if($request->imageId){
                $tempImage  = TempImage::find($request->imageId);

                #Create Image
                if($tempImage != null){
                    $extArray   = explode('.', $tempImage->name);
                    $ext        = last($extArray);

                    $fileName   = strtotime('now').$model->id.'.'.$ext;

                    #created small thumbnail
                    $srcPath    = public_path('uploads/temp/'.$tempImage->name);
                    $destPath   = public_path('uploads/projects/small/'.$fileName);
                    $manager    = new ImageManager(Driver::class);
                    $image      = $manager->read($srcPath);
                    $image->coverDown(500, 600);
                    $image->save($destPath);


                    #created large thumbnail
                    $destPath   = public_path('uploads/projects/large/'.$fileName);
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
                'message'   => 'Project Created Successfully'
            ]);
        }
    }

    public function update(Request $request, Project $project)
    {

        if($project == null){
            return response()->json([
                'status'    => false,
                'message'   => 'Project not found!'
            ]);
        }

        #merge slug request
        $request->merge([
            'slug' => Str::slug($request->slug),
        ]);

        $validate = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:projects,slug,'.$project->id.'id',
        ]);

        if($validate->fails()){
            return response()->json([
                'status'    => false,
                'errors'    => $validate->errors(),
                'message'   => 'Validation Error'
            ]);
        }else{
            $project->title               = $request->title;
            $project->slug                = Str::slug($request->slug);
            $project->short_desc          = $request->short_desc;
            $project->content             = $request->content;
            $project->construction_type   = $request->construction_type;
            $project->sector              = $request->sector;
            $project->location            = $request->location;
            $project->status              = $request->status;
            $project->save();

            #save temp Image
            if($request->imageId){
                $oldImage   = $project->image;
                $tempImage  = TempImage::find($request->imageId);

                if($tempImage != null){
                    $extArray   = explode('.', $tempImage->name);
                    $ext        = last($extArray);

                    $fileName   = strtotime('now').$project->id.'.'.$ext;

                    #created small thumbnail
                    $srcPath    = public_path('uploads/temp/'.$tempImage->name);
                    $destPath   = public_path('uploads/projects/small/'.$fileName);
                    $manager    = new ImageManager(Driver::class);
                    $image      = $manager->read($srcPath);
                    $image->coverDown(500, 600);
                    $image->save($destPath);


                    #created large thumbnail
                    $destPath   = public_path('uploads/projects/large/'.$fileName);
                    $manager    = new ImageManager(Driver::class);
                    $image      = $manager->read($srcPath);
                    $image->scaleDown(1200);
                    $image->save($destPath);

                    $project->image = $fileName;
                    $project->save();

                    if($oldImage != ''){
                        File::delete(public_path('uploads/projects/large/'.$oldImage));
                        File::delete(public_path('uploads/projects/small/'.$oldImage));
                    }
                }
            }

            return response()->json([
                'status'    => true,
                'message'   => 'Projects Updated Successfully'
            ]);
        }
    }

    public function show(Project $project)
    {
        if($project == null){
            return response()->json([
                'status'    => false,
                'message'   => 'Projects not found!'
            ]);
        }

        return response()->json([
            'status'    => true,
            'data'      => $project,
            'message'   => 'Projects Show Successfully'
        ]);
    }

    public function destroy(Project $project)
    {
        if($project == null){
            return response()->json([
                'status'    => false,
                'message'   => 'Projects not found!'
            ]);
        }

        #delete service data
        $project->delete();

        #return response
        return response()->json([
            'status'    => true,
            'message'   => 'Project Deleted Successfully'
        ]);
    }
}
