var express = require('express')
var app = express();
var db=require('../db');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var $http=require('http');

app.get('/', function(req,res){
	res.send('');
});

app.use('/',express.static('../app'));

app.post('/',jsonParser,function(req,res){
	var listing = new Todo({thingsToDo: req.body.todo, done:req.body.done});

	console.log(req.body.todo);

	listing.save(function(err,listing){
		if(err){
			res.send(err);
		}
		Todo.find(function(err,Todo){
			if(err){
				return console.log(err);
			}
			console.log('sending todos');
			res.send(Todo);
		});
	});
});



app.get('/getTodos',function(req,res){
	Todo.find(function(err,Todo){
		if(err) 
		{
			return console.log(err);
		}
		if(Todo.length == 0){
			res.send("");
		} else {
			res.send(Todo);
		}
	})
});



app.listen(3000,function(){
	console.log('Todo App lsitining on 3000')
});


module.exports = app;