'use strict';


module.exports = (app, db) => {;

  app.post('/users', (req, res) => {
    const created_at = new Date();
    db.users.create({
      firstname: req.params.firstname,
      lastname: req.params.lastname,
      created_at: created_at
    })
    .then(user => {
       res.json(user);
      // var a = JSON.parse(user);
      // res.json(a);
    });
  });

  app.get('/users', (req, res) => {
    res.send('respond with a resource');
  });

};
