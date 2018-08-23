 /* Updating data in MongoDB database */
 /*jshint esversion: 6 */
const mongoose = require('mongoose');

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

async function updateCourse(id) {
    //Approch1 - Query first
    //FindById()
    //Modify its properties
    //save()
    const course = await Course.findById(id);
    if(!course) return;
    course.set({
        isPublished:false,
        author:"another author",
        name:"Angular course"
    });
    const result = await course.save();
    console.log('result', result);

    //Approch2 - Update first
    //update first
    //get updated document(optional)

}

// run when you want to update data in db
updateCourse('5b7db1228e74cc51e52e1e51');

/* To run $node updatedata.js */