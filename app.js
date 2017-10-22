var express = require('express');
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
var post_eligibility = require('./routes/post_eligibility');
var pdf = require('./routes/pdf');
var fillOutPdf = require('./routes/fillOutPdf');
var vue = require('./routes/vue');
var apply = require('./routes/apply');
var submit = require('./routes/submit');

var lodash = require('lodash');

var app = express();

// these four lines commented by Maggie on Dec -2 for config testing purposes - for azure portal 
var port = process.env.port || 8080; // 8080 for local or whatever number u want
var listener = app.listen(port, function(){
  console.log('Listening on port ' + port);
});

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
app.use('/post_eligibility', post_eligibility);
app.use('/pdf', pdf);
app.use('/fillOutPdf', fillOutPdf);
app.use('/qualify', qualify);
app.use('/vue', vue);
app.use('/apply', apply);
app.use('/submit', submit);

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




 //  var myFilteredData  = lodash.filter(myData, function(c) {
  // return Type = "Moderate";
//});

// var myFilteredData = _.filter(myData, {type: 'Moderate'}) ;




 



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
