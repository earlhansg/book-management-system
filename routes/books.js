var express = require('express');
var router = express.Router();
var db = require('../server/config/db');


/* GET author list. */
// router.get('/', function(req, res, next) {
//   return db
//   .authors
//   .findAll()
//   .then(data => res.json(data));
// });

// POST new author
router.post('/', function (req, res){
  const created_at = new Date();
  db.
  books
  .create({
    book_title: req.body.book_title,
    author_id: req.body.author_id,
    isbn: req.body.isbn,
    published: req.body.published,
    date_published: req.body.date_published,
    is_verified: req.body.is_verified,
    verified_date: created_at
  })
  .then(newBook => {
    res.json(newBook);
  });
});

module.exports = router;
