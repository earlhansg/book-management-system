var express = require('express');
var router = express.Router();

// var users = require('./users');
// var authors = require('./authors');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
