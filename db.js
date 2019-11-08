const knex = require('knex')({
    client: 'mysql',
    connection: {
        host : '35.228.91.156',
        user : 'root',
        password : '',
        database : 'wise'
    },
    pool: { min: 0, max: 7 }
});

module.exports = knex;