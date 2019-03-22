
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', table => {
        table.increments()
        table.string('recipe_name').notNullable().unique()
        table.integer('dish_id').unsigned().unique()
        table.foreign('dish_id').references('id').on('dishes')
        // table.integer('instruction_id').unsigned().unique()
        // table.foreign('instruction_id').references('id').on('instructions')
    })
};

exports.down = function(knex, Promise) {   
    return knex.schema.dropTableIfExists('recipes')
};
