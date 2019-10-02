const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const models = require('./models/index.js');
const cors = require('cors');

app.use(bodyParser.json());
app.use(express.static('client/public'));
app.use(cors());

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

app.listen(port, () => console.log(`Cow api listening on port ${port}!`))