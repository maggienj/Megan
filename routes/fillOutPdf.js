var express = require('express');
var router = express.Router();

/* GET headers page. */
router.get('/', function(req, res, next) {
    res.render('fillOutPdf');
});

module.exports = router;


