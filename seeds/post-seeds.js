// import Post model
const { Post } = require('../models');

// array of data for Post class
const postData = [
  {
    title: 'How To: Collaborate on GitHub',
    content: `Step by step instructions for how to collaborate on GitHub. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    user_id: '3'
  },
  {
    title: 'Survey: Postman or Insomnia?',
    content: `Which API testing tool do you prefer to use? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi vitae suscipit tellus mauris a.`,
    user_id: '1'
  },
  {
    title: 'Product Review: Razer Blade 14',
    content: `Let's take a closer look at the Razer Blade 14. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dignissim diam quis enim lobortis scelerisque fermentum. `,
    user_id: '3'
  },
  {
    title: 'Current Trends: Top 10 Extensions for Visual Studio Code',
    content: `Here are the top 10 extensions that are currently trending for VS Code. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris augue neque gravida in fermentum et sollicitudin. Sed felis eget velit aliquet sagittis. Pharetra et ultrices neque ornare aenean euismod. Dolor sed viverra ipsum nunc aliquet.`,
    user_id: '2'
  },
  {
    title: 'Pros and Cons: Using CSS Frameworks',
    content: `CSS Frameworks were intended to standardize web development, but are they as great as they claim to be? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum.`,
    user_id: '4'
  }
];

// create and insert multiple Posts using postData
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;