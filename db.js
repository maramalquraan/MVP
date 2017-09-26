var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('we are connected!') 
});

var TodoSchema = new mongoose.Schema({
	thingsToDo: String,
	done:Boolean
});
var Todo = mongoose.model('todo', TodoSchema);

module.exports=Todo;