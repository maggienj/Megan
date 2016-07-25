var express = require('express');
// var port = process.env.port || 8080; // 8080 for local or whatever number u want
// var listener = app.listen(port, function(){
//     console.log('Listening on port ' + port); 
// });
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var underscore = require('underscore');

var routes = require('./routes/index');
var users = require('./routes/users');
var about = require('./routes/about');
var qualify = require('./routes/qualify');

var lodash = require('lodash');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/about', about);
app.use('/qualify', qualify);

app.get('/process_get', function (req, res) {
  // Prepare output in JSON format
  response = {
    txtFirstName:req.query.txtFirstName,
    txtLastName:req.query.txtLastName  ,
    numHhold:req.query.numHhold,
    numSalary: req.query.numSalary
    // txtZipCode:req.query.txtZipCode
  };
  console.log(response);
  res.end(JSON.stringify(response));
});




 // var myFilteredData  = lodash.filter(myData, function(c) {
  // return Type = "Moderate";
//});

// var myFilteredData = _.filter(myData, {type: 'Moderate'}) ;


app.post('/post', function (req, res) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());
  app.use(bodyParser.urlencoded({extended: true}));
  console.log(req.body);
  var numHhold = req.body.numHhold;

  var numSalary = req.body.numSalary;
  console.log("numHhold = " + numHhold + ", numSalary is " + numSalary);

  var myData = require('./lkpData.json');
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

  console.log(maxSalLimit[0]);
  if (lodash.toSafeInteger(numSalary) < lodash.toSafeInteger(maxSalLimit[0])) {
    console.log("Congratulations! You are eligible to apply for the affordable housing program. Your sum annual salary = " + numSalary + "and the max limit for eligibility=" + maxSalLimit[0]);
    res.end("Congratulations! You are eligible to apply for the affordable housing program. Your sum annual salary = " + numSalary + " and the max limit for eligibility=" + maxSalLimit[0]);
  } else {
    console.log("Sorry! You are not eligible for the affordable housing program! Your total household annual salary = " + numSalary + " and the max salary limit = " + maxSalLimit);
    res.end("Sorry! You are not eligible for the affordable housing program! Your total household annual salary = " + numSalary + " and the max salary limit = " + maxSalLimit[0]);
  }

});

/* test */
/* app.post('/',function(req,res){
 var numHhold=req.body.numHhold;
 var numSalary=req.body.numSalary;
 console.log("User name = "+numHhold+", password is "+numSalary);
 res.end("yes");
 });
 */



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});





module.exports = app;
