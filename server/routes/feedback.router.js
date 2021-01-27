const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//get all stored feedback from database
router.get('/admin', (req,res) => {
    //debug note to server
    console.log('GET from /feedback/admin');
    //create query
    pool.query(`SELECT * FROM "feedback";`)
    .then((result) => {
        console.log('GET from /feedback/admin: SUCCESS', result.rows);
        res.send(result.rows);
    })
    .catch((err) => {
        console.log('GET from /feedback/admin: FAIL', err);
        res.sendStatus(500);
    });
});

//save reviewed feedback to database
router.post('/submit', (req, res) => {
    //debug note to server
    console.log('POST from /feedback/submit');
    //create query
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`;
    //send query with request body placeholders
    pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
        .then((result => {
            console.log(`POST SUCCESSFUL`);
            res.sendStatus(200);
        }))
        .catch((err) => {
            console.log(`ERROR: ${err}`);
            res.sendStatus(500);
        });
});

module.exports = router;