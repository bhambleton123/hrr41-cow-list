const db = require('../db/index.js');

module.exports.get = (callback) => {
    db.query('SELECT * FROM cows', (error, results) => {
        if(error) throw error;
        callback(results);
    })
}

module.exports.post = (name, description, callback) => {
    db.query('INSERT INTO cows (name, description) VALUES (?, ?)', 
    [name, description], 
    (error, results) => {
        callback(error, results);
    })
}