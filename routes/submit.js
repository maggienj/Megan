var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");

var pdfFillForm = require('pdf-fill-form');
var fs = require('fs');
var fields = {};

//email configuration
var smtpTransport = nodemailer.createTransport(
{
	host: "smtp.gmail.com",
	port: 587,
	secure: false,
    auth: {
      user: 'affordable.housing.rocks@gmail.com',
      pass: 'weloveaffordablehousing'
    },
    logger: false,
    debug: false
},
{
	from: 'affordable.housing.rocks@gmail.com'
}
);


/* GET headers page. */
router.post('/', function(req, res, next) {

	console.log(req.body)
	var pdfnames = [
		req.body.selectedApp1,
		req.body.selectedApp2,
		req.body.selectedApp3,
		req.body.selectedApp4
	]
	pdfnames = pdfnames.filter( function(a) {
		return a
	})

	pdfnames.forEach(populatePdf, req.body)

	var pdfs = [];

	pdfnames.forEach( function(name) {
		pdfs.push({
			fileName: name,
			path: "affPDF/filled-out-"+name,
			cid: 'affordable.housing.rocks@gmail.com'
		});
	});
console.log("\n\nPDF NAMES");
console.log(pdfs);
	var mailOptions = {
		to: 'affordable.housing.rocks@gmail.com',
		subject: 'Your Affordable Housing Application',
		attachments: pdfs
	}

	smtpTransport.sendMail(mailOptions, function(err, res) {
		if (err) {
			console.log(err);
		} else {
			console.log("Message sent!\n");
		}
	});

    res.render('success', { title: 'Express' });

function populatePdf(pdfname) {
	console.log(pdfname)
	pdfFillForm.write("affPDF/"+pdfname,
		req.body,
		{ "save": "pdf" }
	 )
	.then(function(result) {
	    fs.writeFile("affPDF/filled-out-"+pdfname, result, function(err) {
	        if(err) {
	       		return console.log(err);
	       	}
	       	console.log("The file was saved!");
	    }); 
	}, function(err) {
	  	console.log(err);
	});
}
});

module.exports = router;


