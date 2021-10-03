var express = require('express');
var mysql = require('mysql');

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const connection = mysql.createConnection(config);
const app = express();

connection.query(`INSERT INTO people(name) value('Diego Monte')`);

getPeople = function() {
    return new Promise((resolve, reject) => {
        connection.query(`select * from people`, function (err, rows, fields) {
            if (err) return reject(err)
            resolve(rows)
        })
    })
}

getPeople().then(function(results){
    global.results = results;
}).catch(function(err){
    console.log("Promise rejection error: "+err);
})

connection.end();

app.get('/', function (req, res) {

    var numrows = this.results.length;
    var html = `<h1>FullCycle Rocks!<h1>`;

    for(var i = 0; i < numrows; i++) {
        html += `<h5>id: ${this.results[i].id} name: ${this.results[i].name}</h5>`;
    }

    res.send(html)
});

app.listen(3000, function(){ 
    console.log("App:3000 OK!");
});