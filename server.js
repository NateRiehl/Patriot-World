var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var path = require('path');

var app = express();
//static
app.use(express.static(path.resolve('./public')));
app.use('/images',express.static(path.resolve('/public/images')));


var authenticationController = require('./server/controllers/authentication-controller');
var profileController = require('./server/controllers/profile-controller');
var postController = require('./server/controllers/post-controller');
mongoose.connect('mongodb://localhost:27017/patriot-world');

app.use(bodyParser.json());
app.use(multipartMiddleware);
app.use('/app', express.static(__dirname + "/app"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));

// req stands for request and res stands for response
app.get('/', function(req, res){
	res.sendfile('index.html');
});

//Authentication
app.post('/api/user/signup', authenticationController.signup);
app.post('/api/user/login', authenticationController.login);

//Profile
app.post('/api/profile/editPhoto', multipartMiddleware, profileController.updatePhoto);
app.post('/api/profile/updateUsername', profileController.updateUsername);
app.post('/api/profile/updateBio', profileController.updateBio);


//Posts
app.post('/api/posts/create', postController.createPost);
app.post('/api/posts/createComment', postController.createComment);
app.post('/api/posts/createReply', postController.createReply);
app.get('/api/posts', postController.getPosts);
app.get('/api/posts/post', postController.getPost);
app.post('/api/posts/upvote', postController.upvote);
app.post('/api/posts/remove', postController.removePost);

app.listen('3000', function(){
	console.log("Listening for localhost:3000");
});