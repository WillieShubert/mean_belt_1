console.log('user model');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {type: String, required: true}
  });

mongoose.model('User', userSchema)
