 /* Removing data from MongoDB database */
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
 
async function removeCourse(id) {
    // const result = await Course.deleteMany({_id;id});
    const course = await Course.findByIdAndRemove(id);
    console.log('course', course);
}
 
// run when you want to update data in db
removeCourse('5b7f079120c5d2159192b868');
 
/* To run $node removedata.js */