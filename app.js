const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public'));
app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.listen(process.env.PORT || 3000, function() {
    console.log(__dirname)
});

console.log('Run server');