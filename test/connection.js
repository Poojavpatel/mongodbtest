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

const CourseSchema = mongoose.Schema({
	name:String,
	author:String,
	tags:[String],
	date:{ type:Date , default:Date.now},
	isPublished:Boolean
});