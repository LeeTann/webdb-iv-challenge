const knex = require('knex')
const dbConfig = require('../knexfile')

const db = knex(dbConfig.devlopement)

module.exports = {

    getDishes: () => {
        return db('dishes')
    }
}