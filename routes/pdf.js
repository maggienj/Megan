var multer = require('multer');

var upload = multer();

var express = require('express');
var router = express.Router();

var pdfFillForm = require('pdf-fill-form');
var fs = require('fs');
var fields = {};

/* GET headers page. */
router.post('/', upload.array(), function(req, res, next) {

	console.log(req.body)

});

function getKeys(name, myArray) {
	myArray.forEach(
		(dict, i) => {
			var keys = Object.keys(dict)
			keys.forEach(
				(k) => {
					fields[`{$name}{$k.capitalize}{$i}`] = dict[k]
			}
			);
	}
	);
};

function populatePdf(pdfname) {
	pdfFillForm.write('affPDF/AffordableHousing_Application sales-Fields.pdf',
		req.body,
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
}

module.exports = router;


