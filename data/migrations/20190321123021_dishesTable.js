
exports.up = function(knex, Promise) {
    knex.schema.createTable('dishes', tbl => {
        tbl.increments()
        tbl.string('dish_name').notNullable()
        tbl
            .integer('ingredients_id')
            .unsigned()
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes')
};
