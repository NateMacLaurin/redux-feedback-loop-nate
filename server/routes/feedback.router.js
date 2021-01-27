const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/admin', (req,res) => {
    console.log('GET from /feedback/admin');
    pool.query(`SELECT * FROM "feedback";`)
    .then((result) => {
        console.log('GET from /feedback/admin: SUCCESS', result.rows);
        res.send(result.rows);
    })
    .catch((err) => {
        console.log('GET from /feedback/admin: FAIL', err);
        res.sendStatus(500);
    })
});

router.post('/submit', (req, res) => {
    console.log('POST from /feedback/submit');
    res.sendStatus(200);
});

module.exports = router;