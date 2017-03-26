/*
    reads files
*/


var express = require('express');
var app = express();
var reader = require('./filereader');


app.use(reader);


app.get('/',function(req,res) {
    res.send('bleeeh');
});


app.listen(8080,function() {
    console.log('listening on port 8080');
});


