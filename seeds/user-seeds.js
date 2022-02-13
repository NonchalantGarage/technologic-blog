const { User } = require('../models');

const userData = [
    {
        username: 'bob',
        email: 'bob@gmail.com',
        password: 'qwerty'

    },
    {
        username: 'frank',
        email: 'frank@gmail.com',
        password: 'qwerty'
    },
    {
        username: 'roger',
        email: 'roger@gmail.com',
        password: 'qwerty'
    },
    {
        username: 'Simone',
        email: 'simon@gmail.com',
        password: 'qwerty'

    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;