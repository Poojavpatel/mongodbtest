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

async function createCourse(){
	// this course is object of class Course
	const course = new Course({
		name:"React course",
		author:"Pooja",
		tags:['react','frontend'],
		isPublished:true
	});

	//saving this object as document in database
	// .save() is an async method , it returns a promise ,hence we can await it
	// with await we need a async function hence we wrap course obect and saving in 
	// an async function n then call it
	const result = await course.save();
	console.log(result);
}
createCourse();
