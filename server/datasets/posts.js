var mongoose = require('mongoose');
module.exports = mongoose.model('Post', {
	title : String,
	author : String, 
	body : String
});