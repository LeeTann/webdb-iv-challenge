
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Hawaiian'},
        {recipe_name: 'Pepperoni'},
        {recipe_name: 'Spaghetti and Meatballs'},
        {recipe_name: 'Spaghetti with Pesto'}
      ]);
    });
};
