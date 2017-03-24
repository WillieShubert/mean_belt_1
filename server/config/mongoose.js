var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

console.log("mongoose connection and model loading");

mongoose.connect('mongodb://localhost/mean_belt_1');

var models_path = __dirname + '/../models'

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0){
		require(models_path + '/' + file);
	}
})
