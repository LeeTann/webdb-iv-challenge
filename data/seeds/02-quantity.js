
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quantities').del()
    .then(function () {
      // Inserts seed entries
      return knex('quantities').insert([
        {id: 1, quantity: 'pound of pasta'},
        {id: 2, quantity: '16oz tomato sauce'},
        {id: 3, quantity: 'cup of cheese'}
      ]);
    });
};
