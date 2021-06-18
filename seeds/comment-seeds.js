// import Category model
const { Comment } = require('../models');

// array of data for Category class
const comentData = [
  {
    comment: '',
    user_id: '',
    post_id: '',
  },
  {
    comment: '',
    user_id: '',
    post_id: '',
  },
  {
    comment: '',
    user_id: '',
    post_id: '',
  },
  {
    comment: '',
    user_id: '',
    post_id: '',
  },
  {
    comment: '',
    user_id: '',
    post_id: '',
  },
];

// create and insert mulitple instances of Category using categoryData
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;