
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Hawaiian', dish_id: 1},
        {recipe_name: 'Pepperoni', dish_id: 1},
        {recipe_name: 'Spaghetti and Meatballs', dish_id: 2},
        {recipe_name: 'Spaghetti with Pesto', dish_id: 2}
      ]);
    });
};
