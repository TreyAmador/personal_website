/*
    reads files
*/


var express = require('express');
var app = express();
var path = require('path');
var reader = require('./backend/filereader');


app.use(express.static(path.join(__dirname, 'public')));
app.get('/blog',reader,function(req,res) {
    res.send('blog');
});


app.get('/',function(req,res) {
    res.send('Hey there');
});


app.listen(8080,function() {
    console.log('listening on port 8080');
});


