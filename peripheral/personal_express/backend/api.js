

var express = require('express');
var app = express.Router();
var path = require('path');
var emailer = require('./emailer.js');


app.get('/',function(req,res,next) {
    res.render('../frontend/views/home.ejs')
});


app.get('/about',function(req,res,next) {
    res.render('../frontend/views/about.ejs');
});


app.get('/contact',function(req,res,next) {
    res.render('../frontend/views/contact.ejs');
});


// send email back here!
app.post('/contact',function(req,res,next) {
    return res.send({user_msg:'All went well!'});
});


module.exports = app;

