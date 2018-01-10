var express = require('express');
var router = express.Router();
var db = require('../server/config/db');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');


/* GET users listing. */
router.get('/', function(req, res, next) {
  return db
  .users
  .findAll()
  .then(data =>
    res.json(data));
});

// POST new user
router.post('/', function (req, res){
  const created_at = new Date();
  const password = bcrypt.hashSync(req.body.password);
  db
  .users
  .create({
    username: req.body.username,
    password: password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    middlename: req.body.middlename,
    email: req.body.email,
    created_at: created_at
  }).then(newUser => {
    res.json(newUser);
  });

});

// router.post('/authenticate', function(req, res) {
//   db
//   .users
//   .findOne(
//     {
//       username: req.body.username
//     }
//   ).select('password').exec(function(err, user){
//     if (err) throw err;
//     if(!user){
//        res.send({message: "Authentication failed. User not found.", success:false});
//     }
//     else if (user) {
//
//     }
//   })
//   .then(user => {
//     var myToken = jwt.sign({ user: user.id },
//                                      'secret',
//                                     { expiresIn: 24 * 60 * 60 });
//     res.send(200, {'token': myToken,
//                    'userId': user.id,
//                    'username': user.username });
//
//   })
// });

module.exports = router;
