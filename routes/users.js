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

// POST new user
router.post('/', function (req, res){
  const created_at = new Date();
  db.
  users
  .create({
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    middlename: req.body.middlename,
    email: req.body.email,
    created_at: created_at
  })
  .then(data => {
    res.json(data);
  });
});

module.exports = router;
