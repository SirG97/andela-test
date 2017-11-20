/*
* @Author: SirG
* @Date:   2017-11-04 07:05:11
* @Last Modified by:   SirG
* @Last Modified time: 2017-11-17 09:42:17
*/
var mongoose = require('mongoose');
//Students schema
 var StudentSchema = mongoose.Schema({
 		name:{
 			type: String,
 			required: true
 		},
 		reg:{
 			type: String,
 			required: true
 		},
 		department:{
 			type: String,
 			required: true
 		},
 		level:{
 			type: String,
 			required: true
 		},
 		gender: {
 			type: String,
 			required: true
 		}
 });

var students  = module.exports = mongoose.model('students', StudentSchema);
module.exports.getStudents = function(callback, limit){
	students.find(callback).limit(limit);
}

//Ge a single student info
module.exports.getStudentById = function(id, callback){
	students.findById(id,callback);
}

//Add a student
module.exports.addStudent = function(student, callback){
	students.create(student,callback);
}


//update student info
module.exports.updateStudent = function(id, student, options, callback){
	var query = {_id : id}
	var update = {
		name: student.name,
		reg: student.reg,
		department: student.department,
		level: student.level,
		gender: student.gender
	}
	students.findOneAndUpdate(query, update, options, callback);
}

//Delete students 
module.exports.deleteStudent = function(id, callback){
	var query = {_id : id}
	students.remove(query,callback);
}