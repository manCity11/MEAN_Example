var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

//Controllers
var authenticateCtrl = require('../controllers/authenticateCtrl');
var userCtrl = require('../controllers/userCtrl');

router.post('/user/create', userCtrl.userCreate);

//Middleware
router.use(function(req, res, next){
	var token = req.body.token || req.headers['token'];

	if(token){
		jwt.verify(token, config.secret, function(err, decode){
			if(err){
				res.status(500).json({
					message: 'Invalid token'
				});
			}
			else{
				next();
			}
		});
	}
	else{
		res.status(500).json({
			message: 'Please send a token'
		});
	}
});

router.delete('/user/:username', userCtrl.userDelete);

module.exports = router;
