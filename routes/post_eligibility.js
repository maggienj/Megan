var express = require('express');
var router = express.Router();
var lodash = require('lodash');
// var app = express();

/* GET headers page. */

router.get('/', function(req, res, next) {
	console.log("*************");
    res.render('post_eligibility', { title: 'Express' });
});
