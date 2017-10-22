var express = require('express');
var router = express.Router();
var lodash = require('lodash');
// var app = express();

/* GET headers page. */

router.get('/', function(req, res, next) {
	console.log("*************");
    res.render('apply', { title: 'Express' });
});

router.post('/', function (req, res) {
  
  console.log(req.body);
  var numHhold = req.body.total_household;

  var numSalary = req.body.total_salary;
 

  var myData = require('../lkpData.json');
  var myFilteredData = lodash.filter(myData, {"Type": "Moderate"});
  console.log(myFilteredData);


  /* var cnstHhold = "'"+numHhold+'Person' +"'";
   console.log(cnstHhold);
   var currentHhold = lodash.mapValues(myFilteredData,cnstHhold);
   var myFilteredData2 = lodash.pickBy(myFilteredData,[cnstHhold]);
   console.log( currentHhold);
   console.log("this is kb");
   console.log(myFilteredData2);
   console.log(myFilteredData[cnstHhold]);
   console.log("underscore ");
   var unsData = underscore.pluck(myFilteredData,"'"+numHhold+'Person' +"'");
   console.log(unsData);
   */
  console.log("numHhold = " + numHhold + ", numSalary is " + numSalary);
  var maxSalLimit = lodash.mapValues(myFilteredData, numHhold+'Person');
  
// This route receives the posted form.
// As explained above, usage of 'body-parser' means
// that `req.body` will be filled in with the form elements

  


  console.log(maxSalLimit[0]);

  if (lodash.toSafeInteger(numSalary) < lodash.toSafeInteger(maxSalLimit[0])) {
    var decisionStr = "Congratulations! You are eligible to apply for the affordable housing program. Your sum annual salary = " + numSalary + " and the max limit for eligibility = " + maxSalLimit[0];
    console.log("Eligible");
    res.render('decision', { title:express , message: decisionStr });
  } else {
     var decisionStr = "Sorry! You are not eligible for the affordable housing program! Your total household annual salary = " + numSalary + " and the max salary limit = " + maxSalLimit[0 ];
     console.log("Not Elegible");
    res.render('decision', { title:express , message: decisionStr });
  }


});



module.exports = router;

