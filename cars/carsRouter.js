const express = require('express');
const Cars = require('./carsDb.js');
const router = express.Router();

router.get('/', (req, res)=> {
    const { limit, sortBy, sortDir } = req.body;
    !sortBy
    ? (
        Cars.get(limit, 'id', sortDir)
            .then(vehicleData => {
                res.status(200).json({ MESSAGE: 'Your [GET] request was successful:', vehicleData });
            })
            .catch(err => {
                res.status(500).json({ MESSAGE: 'There was an error with your [GET] request:', err });
            })
    ) : (
        Cars.get(limit, sortBy, sortDir)
            .then(vehicleData => {
                res.status(200).json({ MESSAGE: 'Your [GET] request was successful:', vehicleData });
            })
            .catch(err => {
                res.status(500).json({ MESSAGE: 'There was an error with your [GET] request:', err });
            })
    );
});

router.get('/:id', (req, res)=> {
    const { id } =  req.params;
    Cars.getById(id)
        .then(vehicleData => {
            vehicleData.length === 0
            ? (
                res.status(404).json({ MESSAGE: 'The record you requested could not be located.'})
            ) : (
                res.status(200).json({ MESSAGE: 'Your [GET] request was successful:', vehicleData })
            );
        })
        .catch(err => {
            res.status(500).json({ MESSAGE: 'There was an error with your [GET] request:', err });
        });
});

router.post('/', (req, res)=> {
    const newVehicle = req.body;
    Cars.insert(newVehicle)
        .then(vehicleData => {
            res.status(201).json({ MESSAGE: 'Your [POST] request was successful:', vehicleData });
        })
        .catch(err => {
            res.status(500).json({ MESSAGE: 'There was an error with your [POST] request:', err });
        });
});

router.put('/:id', (req, res)=> {
    const { id } =  req.params;
    const changes = req.body;
    
    Cars.update(id, changes)
        .then(vehicleData => {
            res.status(201).json({ MESSAGE: 'Your [PUT] request was successful:', vehicleData });
        })
        .catch(err => {
            res.status(500).json({ MESSAGE: 'There was an error with your [PUT] request:', err });
        });
});

router.delete('/:id', (req, res)=> {
    const { id } =  req.params;
    Cars.remove(id)
        .then(vehicleData => {
            res.status(201).json({ MESSAGE: 'Your [DELETE] request was successful:', VHEHICLE_REMOVED: id });
        })
        .catch(err => {
            res.status(500).json({ MESSAGE: 'There was an error with your [DELETE] request:', err });
        });
});

module.exports = router;