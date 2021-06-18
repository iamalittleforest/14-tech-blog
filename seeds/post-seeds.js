// import Post model
const { Post } = require('../models');

// array of data for Post class
const postData = [
  {
    title: '',
    content: '',
    user_id: ''
  },
  {
    title: '',
    content: '',
    user_id: ''
  },
  {
    title: '',
    content: '',
    user_id: ''
  },
  {
    title: '',
    content: '',
    user_id: ''
  },
  {
    title: '',
    content: '',
    user_id: ''
  }
];

// create and insert multiple Posts using postData
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;