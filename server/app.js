const express = require('express')
const app = express()
const port = 3000
const db = require('./db/index.js');
const bodyParser = require('body-parser');
const models = require('./models/index.js');

app.use(bodyParser.json());

app.get('/api/cows', (req, res) => {
    models.get((results) => {
        res.status(200).send(results);
    })
})

app.post('/api/cows', (req, res) => {
    let params = [req.body.name, req.body.description];
    models.post(params[0], params[1], (err, results) => {
        if(err) throw err;
        res.sendStatus(201);
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))