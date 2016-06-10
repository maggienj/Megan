var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

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
    numSalary:req.query.numSalary,
    txtZipCode:req.query.txtZipCode
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

var myData = require('./lkpData.json') ;
var myFilteredData = lodash.filter(myData, {"Type": "Moderate"});
var myPersonVal = lodash.mapValues(myFilteredData, '1Person');
var myPersonVal15 = lodash.mapValues(myFilteredData, '1.5Person');
var myPersonVal2 = lodash.mapValues(myFilteredData, '2Person');
var myPersonVal3 = lodash.mapValues(myFilteredData, '3Person');
var myPersonVal4 = lodash.mapValues(myFilteredData, '4Person');
var myPersonVal45 = lodash.mapValues(myFilteredData, '4.5Person');
var myPersonVal5 = lodash.mapValues(myFilteredData, '5Person');
var myPersonVal6 = lodash.mapValues(myFilteredData, '6Person');
var myPersonVal7 = lodash.mapValues(myFilteredData, '7Person');
var myPersonVal8 = lodash.mapValues(myFilteredData, '8Person');



 // var myFilteredData  = lodash.filter(myData, function(c) {
  // return Type = "Moderate";
//});

// var myFilteredData = _.filter(myData, {type: 'Moderate'}) ;
 console.log(myFilteredData);
console.log(myPersonVal);
console.log(myPersonVal15);

console.log(myPersonVal2);
console.log(myPersonVal3);
console.log(myPersonVal4);
console.log(myPersonVal45);

console.log(myPersonVal5);
console.log(myPersonVal6);
console.log(myPersonVal7);
console.log(myPersonVal8);



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
