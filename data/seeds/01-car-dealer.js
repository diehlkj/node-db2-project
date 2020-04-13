
exports.seed = function(knex) {
  // '.del' Deletes ALL existing entries based on WHERE conditionals one by one
  // '.truncate' Deletes ALL data regardless and rewrites it with the following seed data  
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { id: 1, vin: '1fmyu03182kc21229', year: 2002, make: 'ford', model: 'escape', mileage: 105830.5, transmission: 'automatic', title: 'clear' },
        { id: 2, vin: '3hgcm56406g701961', year: 2006, make: 'honda', model: 'accord', mileage: 183756.2, transmission: 'automatic', title: 'clear' },
        { id: 3, vin: 'kmhec4a44ca031526', year: 2012, make: 'hyundai', model: 'sonata', mileage: 48395.9, transmission: 'automatic', title: 'clear' },
        { id: 4, vin: 'jm1fe173840106428', year: 2004, make: 'mazda', model: 'rx-8', mileage: 93741.3, transmission: 'manual', title: 'clear' },
        { id: 5, vin: '1n6aa0cc0an303806', year: 2010, make: 'nissan', model: 'titan', mileage: 113342.2, transmission: 'automatic', title: 'clear' },
        { id: 6, vin: 'jtdzn3eu6e3366542', year: 2014, make: 'toyota', model: 'prius v', mileage: 67384.7, transmission: 'cvt', title: 'clear' }
      ]);
    });
};
