/* Exercise - create a program and get all published courses ,
that are 15$ or more or have word 'by' in title*/
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
        .or([{price:{ $gte:15 }} , {namep:/.*by.*/}])
	console.log(coursesdata);
}

getCourses();