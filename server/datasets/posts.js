var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var Comments = new Schema({
	body      : String
  , date      : Date
});

Comments.add({ children: [Comments] });

var Post = new Schema({
	title : String,
	author : String, 
	body : String,
	link : String,
	votes : { type: Number, default: 0 },
	comments : [Comments]
});

module.exports = mongoose.model('Post', Post);
