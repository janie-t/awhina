exports.up = function(knex, Promise) {
  return knex.schema.table('motivate', function (table) {
    table.string('motivate_source');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('motivate', function (table) {
    table.dropColumn('motivate_source');
  });
};
