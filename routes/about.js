var express = require('express');
var router = express.Router();

/* GET headers page. */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'Afordable Housing Program @ Princeton' });
});

module.exports = router;


