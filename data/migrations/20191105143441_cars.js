
exports.up = function(knex) {
  return knex.schema.createTable('cars', function(table) {
    table.increments();
    table.string('vin', 255);
    table.string('color', 225);
    table.string('make', 255);
    table.string('model', 255);
    table.integer('year');

    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
