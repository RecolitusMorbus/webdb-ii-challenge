
exports.seed = function(knex, Promise) {
  return knex('cars')
    .truncate()
    .then(function () {
      return knex('cars').insert([
        {id: 1, vin: '1HGCM82633A004352', color: 'green', make: 'Toyoda', model: 'Camry', year: '2020'},
        {id: 2, vin: '', color: 'fuchsia', make: 'Ford', model: '', year: ''},
        {id: 3, vin: '3HSTW83472B010552', color: 'red', make: 'Dodge', model: 'Spaceship', year: '2005'}
      ]);
    });
};
