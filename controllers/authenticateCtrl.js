var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var config = require('../config/database');

var User = require('../models/user');

module.exports.authenticate = function(req, res){
	User.findOne({
		username: req.body.username
	}, function(err, user){
		if(err){
			res.status(500).json({
				message: 'Impossible to find user'
			});
		}
		if(!user){
			res.status(500).json({
				success: false,
				message: 'Authentication failed. User not found'
			});
		}
		else if(user){
			if(bcrypt.compare(!req.body.password, user.password, function(err){})){
				res.status(500).json({
					success: false,
					message: 'Authentication failed. Wrong password'
				});
			}
			else{
				var token = jwt.sign(user, config.secret, {
					expiresIn: 4000
				});

				res.status(200).json({
					success: true,
					message: 'Authenticate successfully',
					token: token
				});
			}
		}
	});
}
