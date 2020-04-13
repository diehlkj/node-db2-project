const express = require('express');
const Cars = require('./carsDb.js');
const router = express.Router();

router.get('/', (req, res)=> {
    Cars.get()
        .then(data => {
            res.status(200).json({ MESSAGE: 'Your [GET] request was successful:', data });
        })
        .catch(err => {
            res.status(500).json({ MESSAGE: 'There was an error with your [GET] request:', err });
        });
});

router.get('/:id', (req, res)=> {
    Cars.getById()
        .then(data => {
            res.status(200).json({ MESSAGE: 'Your [GET] request was successful:', data });
        })
        .catch(err => {
            res.status(500).json({ MESSAGE: 'There was an error with your [GET] request:', err });
        });
});

router.post('/', (req, res)=> {
    Cars.insert()
        .then(data => {
            res.status(201).json({ MESSAGE: 'Your [POST] request was successful:', data });
        })
        .catch(err => {
            res.status(500).json({ MESSAGE: 'There was an error with your [POST] request:', err });
        });
});