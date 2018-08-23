 /* Vaidate and Add data to MongoDB database */
 /*jshint esversion: 6 */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
	.then(() => console.log('connected to MongoDB....'))
	.catch(err => console.log('could not connect to MongoDB....',err));
// since .connect returns a promise we can use then and catch

// creating schema
const CourseSchema = mongoose.Schema({
	name:{ type:String, required:true },
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
		//name:"Photoshop course",
		author:"Pooja",
		tags:['photoshop','design'],
		isPublished:true
	});

    // We are only assuming sucess of promise so to handle we put in try catch block
    try {
        const result = await course.save();
	    console.log(result);
    } catch (error) {
        console.log('Error', error.message);
    }
	
}

// run when you want to add to db
createCourse();

/* To run $node connection.js */