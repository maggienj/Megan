var express = require('express');
var router = express.Router();

/* GET headers page. */
router.get('/', function(req, res, next) {
  console.log(req);
});

module.exports = router;


