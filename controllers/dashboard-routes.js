// import routes and models
const router = require('express').Router();
const { Comment, Post, User } = require('../models');

// dashboard route
router.get('/', async(req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard', { ...posts, logged_in: req.session.logged_in });

  } catch (err) {
    res.status(500).json(err);
  }
});

// new post route

// edit post route

module.exports = router;