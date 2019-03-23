const knex = require('knex')
const dbConfig = require('../knexfile')

const db = knex(dbConfig.development)

module.exports = {

    getDishes: () => {
        return db('dishes')
    },

    addDish: (dish) => {
        return db('dishes')
        .insert(dish)
    },

    getDish: (id) => {
        return db('dishes')
        .join('recipes', {'dishes.id': 'recipes.dish_id'})
        .select('dishes.id', 'dishes.dish_name', 'recipes.recipe_name')
        .where({'dishes.id': id})
    }
}