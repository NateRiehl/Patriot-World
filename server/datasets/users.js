var mongoose = require('mongoose');
module.exports = mongoose.model('User', {
	email:  {
    type: String,
    unique: true,
    required: true
  },
	username:  {
    type: String,
    required: true
  },
	bio: String,
	password: String,
	image: String,
	hash: String,
  	salt: String
});