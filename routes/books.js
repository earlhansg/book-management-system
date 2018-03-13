var express = require('express');
var router = express.Router();
var db = require('../server/config/db');
var promise = require('bluebird');


/* GET book list. */
// router.get('/', function(req, res, next) {
//   return db
//   .books
//   .findAll()
//   .then(books => {
//     promise.all(books.map(book => {
//       return db.authors
//       .findById(book.author_id)
//       .then(author => {
//         book.dataValues.author_name = author.name;
//         return book;
//       });
//     })).then(result => res.json(result));
//
//   });
// });

router.get('/', function(req, res, next) {
  return db
  .books
  .findAll()
  .then(books => {
      promise.all(books.map(book => {
        return db.authors
        .findById(book.author_id)
        .then(author => {
          book.dataValues.author_name = author.name;
        return db.students
          .findById(book.student_id)
          .then(student => {
            if(typeof(student) == 'undefined' || student === null)
                book.dataValues.student = '';
            else
                book.dataValues.student = `${student.firstname} ${student.lastname}`;
                return book
          });
          return book;
        })
  }))
  .then(result => res.json(result));

  });
});

// POST new author
router.post('/', function (req, res){
  const created_at = new Date();
  db.
  books
  .create({
    book_title: req.body.book_title,
    author_id: req.body.author_id,
    student_id: req.body.student_id,
    isbn: req.body.isbn,
    published: req.body.published,
    date_published: req.body.date_published,
    is_available: req.body.status,
    is_verified: req.body.is_verified,
    verified_date: created_at
  })
  .then(newBook => {
    res.json(newBook);
  })
});



router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updated_at = new Date();
  db.
  books
  .find({
    where: { id: id }
  })
  .then(book => {
    return book.updateAttributes({
      book_title: req.body.book_title,
      author_id: req.body.author_id,
      student_id: req.body.student_id,
      isbn: req.body.isbn,
      published: req.body.published,
      is_available: req.body.is_available,
      updated_at: updated_at
    })
    .then(updatedBook => {
        res.json(updatedBook);
    });
  });
});

module.exports = router;
