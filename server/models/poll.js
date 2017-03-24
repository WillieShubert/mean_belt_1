console.log('poll model');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var pollSchema = new Schema({
  _name: {type: Schema.Types.ObjectId, ref: 'Name'},
  question: { type: String, minlength: 8},
  option1: {type: String, required: true},
  option1_count: {type: Number, default: 0},
  option2: {type: String, required: true},
  option2_count: {type: Number, default: 0},
  option3: {type: String, required: true},
  option3_count: {type: Number, default: 0},
  option4: {type: String, required: true},
  option4_count: {type: Number, default: 0},
  created_at:{ type: Date, default: Date.now },
});

mongoose.model('Poll', pollSchema)
