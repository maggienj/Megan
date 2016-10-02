var express = require('express');
var router = express.Router();
// var app = express();

/* GET headers page. */

router.get('/', function(req, res, next) {
    res.render('qualify', { title: 'Express' });
});




module.exports = router;

