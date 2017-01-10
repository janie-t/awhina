exports.up = function(knex, Promise) {
  return knex.schema.createTable('motivate', function (table) {
    table.increments('motivate_id');
    table.string('motivate_item');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('motivate');
};
