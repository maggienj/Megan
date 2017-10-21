var express = require('express');
var router = express.Router();

/* GET headers page. */
router.post('/', function(req, res, next) {
  	var pdfFillForm = require('pdf-fill-form');
	var fs = require('fs');

	pdfFillForm.write('affPDF/AffordableHousing_Application sales-Fields.pdf',
		{
			"name": req.body.name,
			"address": req.body.address,
			"state": req.body.state,
			"city": req.body.city,
			"zip": req.body.zip,
			"home": req.body.home,
			"work": req.body.work,
			"cell": req.body.cell,
			"email": req.body.email
		},
		{ "save": "pdf" }
	 )
	.then(function(result) {
	    fs.writeFile("affPDF/test123.pdf", result, function(err) {
	        if(err) {
	       		return console.log(err);
	       	}
	       	console.log("The file was saved!");
	    }); 
	}, function(err) {
	  	console.log(err);
	});
});

module.exports = router;


