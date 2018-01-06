'use strict'

module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('author', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      required: true
    },
    address: {
      type: DataTypes.STRING,
      required: true
    },
    country: {
      type: DataTypes.STRING,
      required: true
    },
    phone_number: {
      type: DataTypes.INTEGER(2),
      required: true
    },
    website: {
      type: DataTypes.STRING,
      required: true
    },
    email: {
      type: DataTypes.STRING,
      required: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    underscored: true
  });
  return Author;
};
