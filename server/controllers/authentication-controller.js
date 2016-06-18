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

module.exports.upvote = function(req, res){
	var postId = req.body._id;
	Post.findById(postId, function(err, postData){
		var post = postData;
		post.votes += 1;
		post.save(function(err){
			if(err){
				console.log('Fail');
				res.json({status:500});
			}
			else{
                console.log("save successful");                   
                res.json({status: 200})
            }
		});
	});
}