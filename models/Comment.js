// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import database connection from connection.js
const sequelize = require('../config/connection.js');

// initialize Category model (table) by extending off Sequelize's Model class
class Comment extends Model {}

// set up fields and rules for Comment model
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
    },
    comment: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.STRING,
    },
    post_id: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;
