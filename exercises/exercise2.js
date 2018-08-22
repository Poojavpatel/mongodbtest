/* Exercise - create a program and get all published frontend and backend courses ,
sort them by price in descending & display only their name and author*/
/*jshint esversion: 6 */
const mongoose = require('mongoose');
// connect to database
mongoose.connect('mongodb://localhost/mongoexercises')
	.then(() => console.log('connected to MongoDB....'))
    .catch(err => console.log('could not connect to MongoDB....',err));
 
// creating schema
const CourseSchema = mongoose.Schema({
	name:String,
	author:String,
	tags:[String],
	date:{ type:Date , default:Date.now},
    isPublished:Boolean,
    price:Number
});
const Course = mongoose.model( 'Course' , CourseSchema); // schema to model

async function getCourses(){
	const coursesdata = await Course
        .find({isPublished:true})
        .or([{tags:'backend'} , {tags:'frontend'}])
		.sort({ price:-1 })
		.select({name:1 , author:1});
	console.log(coursesdata);
}

getCourses();