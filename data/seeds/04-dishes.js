
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        { dish_name: 'Pizza', recipe_id: 1, ingredient_id: 1 },
        { dish_name: 'Pasta', recipe_id: 2, ingredient_id: 2 },
      ]);
    });
};
