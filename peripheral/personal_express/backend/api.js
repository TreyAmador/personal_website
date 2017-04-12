

var express = require('express');
var app = express.Router();
var path = require('path');

//var nodemailer = require('nodemailer');

app.get('/',function(req,res,next) {
    res.render('../frontend/views/home.ejs')
});


app.get('/about',function(req,res,next) {
    res.render('../frontend/views/about.ejs');
});


app.get('/contact',function(req,res,next) {
    res.render('../frontend/views/contact.ejs');
});





module.exports = app;

