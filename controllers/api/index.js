const router = require('express').Router();

const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');

// points to post api route
router.use('/posts',postRoutes);
// points to users api route
router.use('/comments', commentRoutes );
// points to users api route
router.use('/users', userRoutes);
// points to users api route


module.exports = router