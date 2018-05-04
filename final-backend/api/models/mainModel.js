var mongoose = require('mongoose'),
Schema = mongoose.Schema,
PersonId = Schema.ObjectId;
// Schema for task routes
var PersonSchema = new Schema({
  personId: PersonId,
  firstName: {type: String},
  lastName: {type: String},
  password:String,
  email:String,
  Created_date: {type: Date,default: Date.now}
  });




module.exports = mongoose.model('Person', PersonSchema);