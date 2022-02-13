const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment  } = require('../models');
const loggedInOnly = require('../utils/auth');


router.get('/create-post',loggedInOnly,(req,res)=>{
  res.render('create-post', {loggedIn: req.session.loggedIn})
})

router.get("/", loggedInOnly, (req, res) => {
  Post.findAll({
     where: {
        user_id: req.session.user_id
      },
    attributes: ["id", "title", "post_content", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      console.log(dbPostData[0]);
      // pass a single post object into the homepage template
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("dashboard", { posts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

  router.get('/edit/:id', loggedInOnly, (req, res) => {
    Post.findByPk(req.params.id, {
      attributes: [
        'id',
        'post_content',
        'title',
        'created_at',
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(postData => {
        if (postData) {
          const post = postData.get({ plain: true });
          res.render('edit-post', {
            post,
            loggedIn: true
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });


module.exports = router;