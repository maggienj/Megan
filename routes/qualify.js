var express = require('express');
var router = express.Router();
var lodash = require('lodash');
// var app = express();

/* GET headers page. */

router.get('/', function(req, res, next) {
	console.log("*************");
    res.render('qualify', { title: 'Express' });
});

router.post('/', function (req, res) {
  
  console.log(req.body);
  var numHhold = req.body.total_household;

  var numSalary = req.body.total_salary;
 

  var myData = require('../lkpData.json');
  var myFilteredData = lodash.filter(myData, {"Type": "Moderate"});
  var myPersonVal1 = lodash.mapValues(myFilteredData, '1Person');
  var myPersonVal15 = lodash.mapValues(myFilteredData, '1.5Person');
  var myPersonVal2 = lodash.mapValues(myFilteredData, '2Person');
  var myPersonVal3 = lodash.mapValues(myFilteredData, '3Person');
  var myPersonVal4 = lodash.mapValues(myFilteredData, '4Person');
  var myPersonVal45 = lodash.mapValues(myFilteredData, '4.5Person');
  var myPersonVal5 = lodash.mapValues(myFilteredData, '5Person');
  var myPersonVal6 = lodash.mapValues(myFilteredData, '6Person');
  var myPersonVal7 = lodash.mapValues(myFilteredData, '7Person');
  var myPersonVal8 = lodash.mapValues(myFilteredData, '8Person');
  console.log(myFilteredData);


  /*
   console.log(myPersonVal1);
   console.log(myPersonVal15);
   console.log(myPersonVal2);
   console.log(myPersonVal3);
   console.log(myPersonVal4);
   console.log(myPersonVal45);
   console.log(myPersonVal5);
   console.log(myPersonVal6);
   console.log(myPersonVal7);
   console.log(myPersonVal8);
   */

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
    console.log(req.body);
  var maxSalLimit;
  switch (numHhold) {
    case '1':
      maxSalLimit = myPersonVal1;
      break;
    case '1.5':
      maxSalLimit = myPersonVal15;
      break;
    case '2':
      maxSalLimit = myPersonVal2;
      break;
    case '3':
      maxSalLimit = myPersonVal3;
      break;
    case '4':
      maxSalLimit = myPersonVal4;
      break;
    case '4.5':
      maxSalLimit = myPersonVal45;
      break;
    case '5':
      maxSalLimit = myPersonVal5;
      break;
    case '6':
      maxSalLimit = myPersonVal6;
      break;
    case '7':
      maxSalLimit = myPersonVal7;
      break;
    case '8':
      maxSalLimit = myPersonVal8;
      break;

    default:
      maxSalLimit = '0';
  }
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

