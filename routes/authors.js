var express = require('express');
var router = express.Router();
var db = require('../server/config/db');


/* GET author list. */
router.get('/', function(req, res, next) {
  return db
  .authors
  .findAll()
  .then(data => res.json(data));
});

// POST new author
router.post('/', function (req, res){
  const created_at = new Date();
  db.
  authors
  .create({
    name: req.body.name,
    address: req.body.address,
    country: req.body.country,
    phone_number: req.body.phone_number,
    website: req.body.website,
    email: req.body.email,
    created_at: created_at
  })
  .then(newAuthor => {
    res.json(newAuthor);
  });
  // .catch(err => {
  //   console.log("error ocurred",err);
  //   res.send({
  //     "code":400,
  //     "message":"error ocurred"
  //   })
  // })
});

module.exports = router;
