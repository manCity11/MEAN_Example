var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

var config = require('../config/database');

//Controllers
var authenticateCtrl = require('../controllers/authenticateCtrl');
var postCtrl = require('../controllers/postCtrl');
var userCtrl = require('../controllers/userCtrl');

router.post('/authenticate', authenticateCtrl.authenticate);
router.post('/user/create', userCtrl.userCreate);

router.get('/posts', postCtrl.postList);
router.get('/post/:slug', postCtrl.postDetail);

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
		console.log(req.headers);
		res.status(500).json({
			message: 'Please send a token'
		});
	}
});

router.delete('/user/:username', userCtrl.userDelete);

router.post('/post/create', postCtrl.postCreate);
router.put('/post/:slug', postCtrl.postUpdate);
router.delete('/post/:slug', postCtrl.postDelete);

module.exports = router;
