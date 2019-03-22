
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'cheese'},
        {id: 2, ingredient_name: 'tomato sauce'},
        {id: 3, ingredient_name: 'ham'},
        {id: 4, ingredient_name: 'pineapple'},
        {id: 5, ingredient_name: 'pepperoni'},
        {id: 6, ingredient_name: 'meatballs'},
        {id: 7, ingredient_name: 'spaghetti'},
        {id: 8, ingredient_name: 'pizza dough'},
        {id: 9, ingredient_name: 'pesto sauce'},
      ]);
    });
};
