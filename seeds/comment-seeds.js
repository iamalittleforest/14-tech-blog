// import Comment model
const { Comment } = require('../models');

// array of data for Comment class
const commentData = [
  {
    comment: '',
    user_id: '',
    post_id: ''
  },
  {
    comment: '',
    user_id: '',
    post_id: ''
  },
  {
    comment: '',
    user_id: '',
    post_id: ''
  },
  {
    comment: '',
    user_id: '',
    post_id: ''
  },
  {
    comment: '',
    user_id: '',
    post_id: ''
  }
];

// create and insert multiple Comments using commentData
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;