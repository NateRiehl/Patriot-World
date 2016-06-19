var mongoose = require('mongoose');
var User = require('../datasets/users');
var Post = require('../datasets/posts');


module.exports.signup = function(req, res){
	var user = new User(req.body);
	user.save();

	res.json(req.body);
}

module.exports.login = function(req, res){
	User.find(req.body, function(err, results){
		if (err){
			console.log('Error');
		} 
		if (results && results.length == 1){
			var userData = results[0];

			res.json({email : req.body.email, 
						id : userData._id});
		}
	});
}