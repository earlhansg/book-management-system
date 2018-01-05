var express = require('express');
var router = express.Router();
var db = require('../server/config/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  return db
  .users
  .findAll()
  .then(data => res.json(data));
});


module.exports = router;
