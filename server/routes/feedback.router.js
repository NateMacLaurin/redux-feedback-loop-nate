const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/admin', (req,res) => {
    console.log('GET from /feedback/admin');
    res.send({data: 'success'});
});

router.post('/submit', (req, res) => {
    console.log('POST from /feedback/submit');
    res.sendStatus(200);
});

module.exports = router;