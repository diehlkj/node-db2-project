const db = require('../data/dbConfig.js');

module.exports = {
    get,
    getById,
    insert,
    update,
    remove
};

function get(limit, sortBy, sortDir) {
    return db('cars')
    .orderBy(sortBy, sortDir)
    .limit(limit);
}

function getById(id) {
    return db('cars')
    .where({ id });
}

function insert(newVehicle) {
    return db('cars')
    .insert(newVehicle)
    .then(vehicleData => {
        return getById(vehicleData[0]);
    });
}

function update(id, changes) {
    return db('cars')
    .where({ id })
    .update(changes)
}

function remove(id) {
    return db('cars')
    .where('id', id )
    .del();
}