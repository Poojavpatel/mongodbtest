const mongoose = require('mongoose');

//connect to mongodb
mongoose.connect('mongodb://localhost/testaroo');

//once connection is open fire this function
mongoose.connection.once('open',function(){
	console.log('Wohooo the connection has been made');
}).on('error',function(error){
	console.log('connection error :' , error );
});