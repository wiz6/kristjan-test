const knex = require('knex')({
    client: 'mysql',
    connection: {
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'wise'
    },
    pool: { min: 0, max: 7 }
});

module.exports = knex;