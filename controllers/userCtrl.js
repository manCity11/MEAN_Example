var User = require('../models/user');

module.exports.userCreate = function(req, res){
	var userTmp = new User({
		username: req.body.username,
		password: req.body.password
	});

	userTmp.save(function(err){
		if(err){
			res.status(500).json({
				message: 'Failed to create user.'
			});
		}
		else{
			res.status(200).json({
				message: 'User sucessfully created.'
			});
		}
	});
}

module.exports.userDelete = function(req, res){
	User.remove({username: req.params.username}, function(err){
		if(err){
			res.status(500).json({
				message: 'Failed to delete user.'
			});
		}
		else{
			res.status(200).json({
				message: 'User successfully removed.'
			});
		}
	});
}
