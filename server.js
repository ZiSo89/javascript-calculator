var mysql = require('mysql');
const express = require('express')
const app = express()
const port = 3000
var server = app.listen(port);
var io = require('socket.io')(server);

app.use(express.static('public'))

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: 'testdb'
});

connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});

io.sockets.on('connection',
    // We are given a websocket object in our function
    function(socket) {
        socket.on('data',
            function(data) {
                connection.query("INSERT INTO calculator(result) VALUES(?)", data, function(err, result) {
                    if (err) throw err;
                    console.log("1 record inserted: " + data);
                });
            }
        );
    }
);