/*
* @Author: SirG
* @Date:   2017-11-04 07:05:43
* @Last Modified by:   SirG
* @Last Modified time: 2017-11-16 10:50:28
*/
var mongoose = require('mongoose');
//Students schema
 var resourceSchema = mongoose.Schema({
 		name:{
 			type: String,
 			required: true
 		},
 		type:{
 			type: String,
 			required: true
 		},
 		category:{
 			type: String,
 			required: true
 		},
 		contributor:{
 			type: String,
 			required: true
 		}
 });

var resources  = module.exports = mongoose.model('resources',resourceSchema);
module.exports.getResources = function(callback,limit){
	resources.find(callback).limit(limit);
}

//Add a resource
module.exports.addResource = function(resource, callback){
	resources.create(resource,callback);
}


//From here is not necessary
//Get a single resource 
module.exports.getResourceById = function(id, callback){
	resources.findById(id,callback);
}
