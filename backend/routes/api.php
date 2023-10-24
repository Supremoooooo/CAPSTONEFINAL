<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserController;

//get all students
Route::get('/students', [App\Http\Controllers\StudentController::class, 'getStudents']);

//create a new student entnry
Route::post('/student/create', [App\Http\Controllers\StudentController::class, 'postStudents']);

//update student entry
Route::put('/student/update/{id}', [App\Http\Controllers\StudentController::class, 'updateStudent']);

//delete student entry
// Route::delete('/student/delete/{id}', [App\Http\Controllers\StudentController::class, 'deleteStudent']);

//get all users
Route::get('/users', [App\Http\Controllers\UserController::class, 'getUser']);

//create a new user entnry
Route::post('/user/create', [App\Http\Controllers\UserController::class, 'postUser']);

//update user entry
Route::put('/user/update/{id}', [App\Http\Controllers\UserController::class, 'updateUser']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
