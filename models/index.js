// import models
const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

// Comment belongsTo User
Comment.belongsTo(User, {

});

// Comment belongsTo Post
Comment.belongsTo(Post, {

});

// Post hasMany Comments
Post.hasMany(Comment, {

});

// Post belongsTo User
Post.belongsTo(User, {

});

// User hasMany Comments
User.hasMany(Comment, {

});

// User hasMany Posts
User.hasMany(Post, {

});

module.exports = {
  Comment,
  Post,
  User
};