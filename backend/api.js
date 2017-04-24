/*
    backend routing system
*/


var express = require('express');
var app = express.Router();
var path = require('path');


var view_filepath = '../frontend/views/';
var demo_filepath = '../frontend/views/demos/';


app.get('/',function(req,res,next) {
    res.render(view_filepath+'home')
});


app.get('/about',function(req,res,next) {
    res.render(view_filepath+'about');
});


app.get('/contact',function(req,res,next) {
    res.render(view_filepath+'contact');
});


app.get('/blog',function(req,res,next) {
    res.render(view_filepath+'blog',{
        constructor:'This page is under construction...'
    });
});


app.get('/cengine',function(req,res,next) {
    res.render(demo_filepath+'cengine');
});


app.get('/trader',function(req,res,next) {
    res.render(demo_filepath+'trader');
});


app.get('/robot',function(req,res,next) {
    res.render(demo_filepath+'robot');
});


app.get('/drum',function(req,res,next) {
    res.render(demo_filepath+'drum');
});


app.get('/asteroids',function(req,res,next) {
    res.render(demo_filepath+'asteroids');
});


module.exports = app;

