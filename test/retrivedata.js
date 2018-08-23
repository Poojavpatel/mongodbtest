 /* Retrive data from MongoDB database */
 /*jshint esversion: 6 */
 const mongoose = require('mongoose');

 //connect to mongodb
 // mongoose.connect('mongodb://localhost/playground');
 // //once connection is open fire this function
 // mongoose.connection.once('open',function(){
 // 	console.log('Wohooo the connection has been made');
 // }).on('error',function(error){
 // 	console.log('connection error :' , error );
 // });
 
 //OR you can do
 mongoose.connect('mongodb://localhost/playground')
     .then(() => console.log('connected to MongoDB....'))
     .catch(err => console.log('could not connect to MongoDB....',err));
 // since .connect returns a promise we can use then and catch
 
 // creating schema
 const CourseSchema = mongoose.Schema({
     name:String,
     author:String,
     tags:[String],
     date:{ type:Date , default:Date.now},
     isPublished:Boolean
 });
 
 // compiling schema into a model
 // .model('singular name of collection',schema that defines shape of documents in this collecion)
 // this Course is a class
 const Course = mongoose.model( 'Course' , CourseSchema);
 
async function getCourses(){
     //retriving objects from database
     // .find() method returns a document query object which islike promise
     // hence we can await it ,adding more filters using find limit sort
     const coursesdata = await Course
         .find({ author:'mosh'})
         .limit(10)
         .sort({ name:-1 })
         .select({name:1 , tags:1});
     console.log(coursesdata);
}

// run when you want to retrive from db
getCourses();

/* To run $node retrivedata.js */