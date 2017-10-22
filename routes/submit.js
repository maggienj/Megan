var express = require('express');
var router = express.Router();

var pdfFillForm = require('pdf-fill-form');
var fs = require('fs');
var fields = {};

/* GET headers page. */
router.post('/', function(req, res, next) {

	console.log(req.body)
	pdfnames = [
		req.body.selectedApp1,
		req.body.selectedApp2,
		req.body.selectedApp3,
		req.body.selectedApp4
	]
	pdfnames.forEach(populatePdf)

});

function populatePdf(pdfname) {
	pdfFillForm.write(`affPDF/{$pdfname}`,
		req.body,
		{ "save": "pdf" }
	 )
	.then(function(result) {
	    fs.writeFile(`affPDF/filled-out-{$pdfname}`, result, function(err) {
	        if(err) {
	       		return console.log(err);
	       	}
	       	console.log("The file was saved!");
	    }); 
	}, function(err) {
	  	console.log(err);
	});
}

module.exports = router;


