var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	admin: Boolean
});

userSchema.pre('save', function(next){
	var that = this;
	
	bcrypt.genSalt(10, function(err, salt){
		if(err){
			throw err;
		}
		else{
			bcrypt.hash(that.apssword, salt, function(err, hash){
				if(err){
					throw err;
				}
				else{
					that.password = hash;
					next();
				}
			});
		}
	});
});

module.exports = mongoose.model('Users', userSchema);
