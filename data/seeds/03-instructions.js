
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe_Id: 1, ingredient_Id: 1, quantity: 1, instruction: 'Get Pasta Sauce' },
        {recipe_Id: 1, ingredient_Id: 1,  quantity: 1, instruction: 'Get cheese' },
        {recipe_Id: 1, ingredient_Id: 1, quantity: 1, instruction: 'Get pepperoni' },
      ]);
    });
};
