/*
* @Author: SirG
* @Date:   2017-10-24 02:40:52
* @Last Modified by:   SirG
* @Last Modified time: 2017-11-17 09:34:17
*/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//Specify folder for front end
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

//Import the model 
var students = require('./models/students');
var resources = require('./models/resources');
//db connection
mongoose.connect('mongodb://localhost/studentresource',{useMongoClient: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
//route for the home page
app.get('/', function(req, res){
	res.send("Hello World, welcome");
});


//route for the students page
app.get('/students', function(req, res){
	students.getStudents(function(err,students){
		if(err){
			throw err;
		}
		res.json(students);
	});
});

//To get single student
app.get('/students/:_id', function(req, res){
	students.getStudentById(req.params._id, function(err,student){
		if(err){
			throw err;
		}
		res.json(student);
	});
});

//Add a student to the database
app.post('/students', function(req, res){
	var student = req.body;
	students.addStudent(student, function(err, student){
		if(err){
			throw err;
		}
		res.json(student);
	});
});

// Update students record;
app.put('/students/:_id', function(req, res){
	var id = req.params._id; //get the id of the student you want to update
	var student = req.body;
	students.updateStudent(id, student, {}, function(err, student){
		if(err){
			throw err;
		}
		res.json(student);
	});
});

// Delete student
app.delete('/students/:_id', function(req, res){
	var id = req.params._id;
	students.deleteStudent(id, function(err, student){
		if(err){
			throw err;
		}
		res.json(student);
	});
});



// route for the resources page
app.get('/resources', function(req, res){
	resources.getResources(function(err,resources){
		if(err){
			throw err;
		}
		res.json(resources);
	});
});

//Get a single resource
app.get('/resources/:_id', function(req, res){
	resources.getResourceById(req.params._id, function(err,resource){
		if(err){
			throw err;
		}
		res.json(resource);
	});
});

//Contribute to the resources database
app.post('/resources', function(req, res){
	var resource = req.body;
	resources.addResource(resource, function(err,resource){
		if(err){
			throw err;
		}
		res.json(resource);
	});
});


app.listen(3000);
console.log("Server is running...We are conected")