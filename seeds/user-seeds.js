// import User model
const { Post: User } = require('../models');

// array of data for User class
const userData = [
  {
    username: '',
    password: ''
  },
  {
    username: '',
    password: ''
  },
  {
    username: '',
    password: ''
  },
  {
    username: '',
    password: ''
  },
  {
    username: '',
    password: ''
  }
];

// create and insert mulitple instances of Category using categoryData
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;