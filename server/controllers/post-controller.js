var mongoose = require('mongoose');
var User = require('../datasets/users');
var Post = require('../datasets/posts');


module.exports.createPost = function(req, res){
	var post = new Post(req.body);
	post.save();
	res.json(req.body);
	console.log('here');
}

module.exports.removePost = function(req, res){
	var postId = req.body._id;
	Post.remove({ _id: postId }, function(err) {
    if (!err) {
         //success   
    }
    else {
        //failure  
    }
});
}

module.exports.createComment = function(req, res){
	console.log(req.body.id);
	var body = req.body.comment;
	var id = req.body.id;
	var comment = {'body' : body};
	Post.update({_id: id },
         {$push: { 'comments' : comment }},{upsert:true}, function(err, data) { 
         	console.log(data);
        res.send(data); 	
});
}

module.exports.createReply = function(req, res){
	var postId = req.body.postId;
	var commentId = req.body.commentId;
	var reply = req.body.reply;
	console.log(reply);
	Post.findById(postId, function( err, post ) {
        for(i in post.comments){
    	if(post.comments[i]._id == commentId){
    		console.log(post.comments[i].children);
        	post.comments[i].children.push({body: reply});
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
    	}
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

module.exports.getPost = function(req, res){
	//console.log(req.query.id);
	return Post.findById(req.query.id, function( err, post ) {
        if( !err ) {
            res.json(post);
        } 
        else {
            return console.log( err );
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