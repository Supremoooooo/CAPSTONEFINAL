<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

use Validator;

class StudentController extends Controller
{
    public function getStudents()
    {

        $students = Student::all();
        return response()->json($students);
    }

    public function postStudents(Request $request)
    {

        $validator = Validator::make($request->all(),[
            'branch'=>'required',
            'time'=>'required',
            'date'=>'required'
        ]);
        

        if($validator->fails())
        {
            $data = [
                'status'=>422,
                'message'=>$validator->messages()
            ];

            return response()->json($data,422);
        }
        else 
        {
            $student = new Student;

            $student->branch=$request->branch;
            $student->time=$request->time;
            $student->date=$request->date;

            $student->save();

            $data = [
                'status'=>200,
                'message'=>"student enrolled successfully"
            ];

            return response()->json($data,200);

        }
    }

    public function updateStudent(Request $request, $id)
    {

        $validator = Validator::make($request->all(),[
            'branch'=>'required',
            'time'=>'required',
            'date'=>'required'
        ]);

        if($validator->fails())
        {
            $data = [
                'status'=>422,
                'message'=>$validator->messages()
            ];

            return response()->json($data,422);
        }
        else 
        {
            $student = Student::find($id);

            $student->branch=$request->branch;
            $student->time=$request->time;
            $student->date=$request->date;

            $student->save();

            $data = [
                'status'=>200,
                'message'=>"Student entry updated successfully"
            ];

            return response()->json($data,200);

        }

    }

    // public function deleteStudent(Request $id)
    // {

    //     // $student = Student::find($id);
    //     $student= Student::where('id', $id);
       
        
    //     if(!$student){
    //         return response()->json(['message' => 'Student not found'], 404);
    //     }

    //     $student->delete();

    //     return response()->json(['message' => 'Student entry deleted successfully']);
    // }


}
