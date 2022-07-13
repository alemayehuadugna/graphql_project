const knex = require('knex')
const { DATABASE_NAME } = require('./utils')
const client = require('./elasticsearch');

const db = knex({
    client: 'sqlite3',
    connection: {
      filename: DATABASE_NAME
    },
    useNullAsDefault: true
})

module.exports = {
    db
}