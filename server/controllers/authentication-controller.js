var mongoose = require('mongoose');
var User = require('../datasets/users');
var Post = require('../datasets/posts');
module.exports.signup = function(req, res){
	var user = new User(req.body);
	user.save();

	res.json(req.body);
}

module.exports.createPost = function(req, res){
	var post = new Post(req.body);
	post.save();
	res.json(req.body);
	console.log('here');
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

module.exports.getPosts = function(req, res){
	return Post.find( function( err, posts ) {
        if( !err ) {
            res.json(posts);
        } 
        else {
            return console.log( err );
        }	
	});
}