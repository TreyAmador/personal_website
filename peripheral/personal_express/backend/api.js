/*
    backend routing system
*/



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


app.get('/blog',function(req,res,next) {
    res.render('../frontend/views/blog.ejs',{
        constructor:'This page is construction...'
    });
});


app.get('/cengine',function(req,res,next) {
    res.render('../frontend/views/demos/cengine.ejs');
});


//app.get('/error',function(req,res,next) {
//    res.render('../frontend/views/error.ejs');
//});


module.exports = app;

