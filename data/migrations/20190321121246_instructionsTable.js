
exports.up = function(knex, Promise) {
    return knex.schema.createTable('instructions', table => {
        table.increments()
        table.integer('recipe_id').unsigned()
        table.foreign('recipe_id').references('id').on('recipes')
        table.integer('ingredient_id').unsigned()
        table.foreign('ingredient_id').references('id').on('ingredients')
        table.float('quantity').notNullable()
        table.string('instruction').notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('instructions')
};
