const { Post } = require('../models');

const postData = [
    {
        title: 'Why graders care so much about README.md',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 1

    },
    {
        title: 'Why you should write your README.md from scratch',
        post_content: 'Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.',
        user_id: 1
    },
    {
        title: 'Top 5 README generators',
        post_content: 'Ut etiam sit amet nisl purus in mollis.',
        user_id: 2
    },
    {
        title: 'Worry about losing 10 points due to your README? Try this!',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 3

    }

];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;