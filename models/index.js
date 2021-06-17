// import models
const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

// Comment belongsTo User

// Comment belongsTo Post

// Post hasMany Comments

// Post belongsTo User

// User hasMany Comments

// User hasMany Posts


module.exports = {
  Comment,
  Post,
  User
};