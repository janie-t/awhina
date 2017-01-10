
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('motivate').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('motivate').insert({motivate_id: 1, motivate_item: 'Kia kaha'}),
        knex('motivate').insert({motivate_id: 2, motivate_item: 'Never give up'}),
        knex('motivate').insert({motivate_id: 3, motivate_item: 'http://www.expertrain.com/SiteAssets/BlogPosts/728-900/1kelc2ob635554443244530143.jpg'})
      ]);
    });
};
