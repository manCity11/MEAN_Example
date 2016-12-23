var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

//Controllers
var userCtrl = require('../controllers/userCtrl');

router.post('/user/create', userCtrl.userCreate);
router.delete('/user/:username', userCtrl.userDelete);

module.exports = router;
