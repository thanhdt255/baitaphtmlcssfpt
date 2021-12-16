const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('/bai2', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/bai2.html'));
})
app.get('/bai3', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/bai3.html'));
})

app.listen(process.env.PORT || 3000, function() {
    console.log(__dirname)
});

console.log('Run server');