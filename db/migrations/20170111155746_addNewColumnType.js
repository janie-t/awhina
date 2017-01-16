exports.up = function(knex, Promise) {
  return knex.schema.table('motivate', function (table) {
    table.string('motivate_type');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('motivate', function (table) {
    table.dropColumn('motivate_type');
  });
};
