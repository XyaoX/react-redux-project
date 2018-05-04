var mongoose = require('mongoose'),
Schema = mongoose.Schema,
PersonId = Schema.ObjectId;
// Schema for task routes
var PersonSchema = new Schema({
  personId: PersonId,
  name: {type: String,required: 'Kindly enter the name of the task'},
  age: Number,
  email:String,
  Created_date: {type: Date,default: Date.now}
  });




module.exports = mongoose.model('Person', PersonSchema);