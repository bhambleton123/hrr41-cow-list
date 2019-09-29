const express = require('express')
const app = express()
const port = 3000
const db = require('./db/index.js');

app.get('/api/cows', (req, res) => {
    db.query('SELECT * FROM cows', (error, results) => {
        if(error) throw error;
        res.status(200).send(results);
    })
})

app.post('/api/cows', (req, res) => {
    db.query('INSERT INTO cows (name, description) VALUES (?, ?)', 
    [req.body.name, req.body.description], 
    (error) => {
        if(error) throw error;
        res.status(201);
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))