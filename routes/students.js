var express = require('express');
var router = express.Router();
var db = require('../server/config/db');



//GET all students
router.get('/', function(req, res){
  return db
  .students
  .findAll()
  .then(student => res.json(student));
});
// POST new student
router.post('/', function (req, res){
  const created_at = new Date();
  db.
  students
  .create({
    id: req.body.id,
    user_id: req.body.user_id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    middlename: req.body.middlename,
    email: req.body.email,
    created_at: created_at
  })
  .then(newStudent => {
    res.json(newStudent);
  });
});

module.exports = router;
