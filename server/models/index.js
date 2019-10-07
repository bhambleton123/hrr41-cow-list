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

module.exports.put = (id, name, callback) => {
    db.query('UPDATE cows SET name = ? WHERE id = ?', 
    [name, id], (error, results) => {
        callback(error, results);
    })
}
module.exports.delete = (id, callback) => {
    db.query('DELETE FROM cows WHERE id= ?', [id], (err, results) => {
        callback(err, results);
    })
}