// import Post model
const { Post } = require('../models');

// array of data for Post class
const postData = [
  {
    title: '',
    content: '',
    user_id: '',
  },
  {
    title: '',
    content: '',
    user_id: '',
  },
  {
    title: '',
    content: '',
    user_id: '',
  },
  {
    title: '',
    content: '',
    user_id: '',
  },
  {
    title: '',
    content: '',
    user_id: '',
  },
];

// create and insert mulitple instances of Category using categoryData
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;