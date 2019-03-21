
exports.up = function(knex, Promise) {
    return knex.schema.createTable('quantities', table => {
        table.increments()
        table.string('quantity').notNullable()
        table
            .integer('quantity_id')
            .unsigned()
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('quantities')
};
