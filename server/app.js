const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const models = require('./models/index.js');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/public'));

app.get('/api/cows', (req, res) => {
    models.get((results) => {
        res.status(200).send(results);
    })
})

app.post('/api/cows', (req, res) => {
    models.post(req.body.name, req.body.description, (err) => {
        if(err) throw err;
        res.sendStatus(201);
    })
})

app.put('/api/cows/:id', (req, res) => {
    models.put(req.params.id, req.body.name, (error, results) => {
        if(error) throw error;
        res.end(JSON.stringify(results));
    })
})

app.delete('/api/cows/:id', (req, res) => {
    models.delete(req.params.id, (error, results) => {
        if(error) throw error;
        res.end(JSON.stringify(results));
    })
})

app.listen(port, () => console.log(`Cow api listening on port ${port}!`))