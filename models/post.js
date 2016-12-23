var mongoose = require('mongoose');
var slugify = require('slugg');
var Schema = mongoose.Schema;

var postSchema = new Schema({
	title: String,
	content: String,
	slug: {
		type: String,
		unique: true
	}
});

postSchema.pre("save", function(next){
	this.slug = slugify(this.title);
	next();
});

module.exports = mongoose.model('Posts', postSchema);
