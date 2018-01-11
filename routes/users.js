var express = require('express');
var router = express.Router();
var db = require('../server/config/db');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');


router.post('/authenticate', function(req, res) {
  db
  .users
  .findOne(
    {
      where:
        {  username: req.body.username }
    }
  ).then(user => {
    // console.log(user);
    if(!user) {
      res.send({message: "Authentication failed. User not found.", success:false});
    }
    else {
      if(bcrypt.compareSync(req.body.password, user.password)) {
        var myToken = jwt.sign({ user: user.id },
                                         'secret',
                                        { expiresIn: 24 * 60 * 60 });
        res.json(200, { token: myToken,
                        userId: user.id,
                        username: user.username,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        middlename: user.middlename,
                        email: user.email
                        });
      } else {
        res.send({message: "Invalid password", success: false });
      }
    }

  })
});

router.use(function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.params.token || req.headers['x-access-token'];

    // decode token
    if (token)
    {

        // verifies secret and checks exp
        jwt.verify(token, 'secret', function(err, decoded) {
          if (err) {
             console.error('JWT Verification Error', err);
             return res.status(403).send(err);
          } else {
             req.decoded = decoded;
             return next();
          }
        });

    }
    else
    {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }

});

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

module.exports = router;
