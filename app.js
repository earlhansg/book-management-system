
'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var db = require('./server/config/db');
var env = require('./server/config/env');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



var index = require('./routes/index');
var users = require('./routes/users');
var authors = require('./routes/authors');
var students = require('./routes/students');
var books = require('./routes/books');
var jwt = require('jsonwebtoken');

const app = express();
const PORT = env.PORT;


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});


db.sequelize.sync();

app.use('/', index);
app.use('/users', users);
// app.use(function(req, res, next) {
//
//     // check header or url parameters or post parameters for token
//     var token = req.body.token || req.params.token || req.headers['x-access-token'];
//
//     // decode token
//     if (token)
//     {
//
//         // verifies secret and checks exp
//         jwt.verify(token, 'secret', function(err, decoded) {
//           if (err) {
//              console.error('JWT Verification Error', err);
//              return res.status(403).send(err);
//           } else {
//              req.decoded = decoded;
//              return next();
//           }
//         });
//
//     }
//     else
//     {
//
//         // if there is no token
//         // return an error
//         return res.status(403).send({
//             success: false,
//             message: 'No token provided.'
//         });
//
//     }
//
// });
app.use('/authors', authors);
app.use('/students', students);
app.use('/books', books);


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;
