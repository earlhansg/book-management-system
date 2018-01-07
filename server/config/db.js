'use strict'

const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  dialect: env.DATABASE_DIALECT,
  define: {
    underscored: true
  }
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.users = require('../models/users')(sequelize, Sequelize);
db.authors = require('../models/authors')(sequelize, Sequelize);
db.students = require('../models/students')(sequelize, Sequelize);
db.books = require('../models/books')(sequelize, Sequelize);

//Relations
db.students.belongsTo(db.users);
db.users.hasMany(db.students);
db.books.belongsTo(db.authors);
db.authors.hasMany(db.books);

module.exports = db;
