
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', table => {
        table.increments()
        table.string('recipe_name').notNullable()
    })
};

exports.down = function(knex, Promise) {   
    return knex.schema.dropTableIfExists('recipes')
};
