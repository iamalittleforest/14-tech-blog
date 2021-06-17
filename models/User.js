// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import database connection from connection.js
const sequelize = require('../config/connection');

// initialize User model (table) by extending off Sequelize's Model class
class User extends Model {}

// set up fields and rules for User model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;