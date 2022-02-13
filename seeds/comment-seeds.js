const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Add a screenshot",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Make sure to include licenses",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "A link to your github account works wonders",
        user_id: 3,
        post_id: 1
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;