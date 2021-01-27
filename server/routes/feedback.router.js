const express = require('express');
const router = express.router();
const pool = require('../modules/pool.js');

router.get('/admin', (req,res) => {
    console.log('GET from /admin');
});

router.post('/submit', (req, res) => {
    console.log('POST from /submit');
});

module.exports = router;