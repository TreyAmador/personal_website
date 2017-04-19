/*
    backend routing system
*/


var express = require('express');
var app = express.Router();
var path = require('path');
var emailer = require('./emailer.js');


app.get('/',function(req,res,next) {
    res.render('../frontend/views/home')
});


app.get('/about',function(req,res,next) {
    res.render('../frontend/views/about');
});


app.get('/contact',function(req,res,next) {
    res.render('../frontend/views/contact');
});


//app.post('/contact',function(req,res,next) {
    // res.send('It worked!');
    /*
    var res_msg = emailer(
        req.body.username,
        req.body.subject,
        req.body.email,
        req.body.textbody
    );
    console.log('/contact post',res_msg);
    //res.send({
    //    msg:res_msg
    //});
    return res.send({
        msg:res_msg
    });
    */
//});


app.get('/cengine',function(req,res,next) {
    res.render('../frontend/views/demos/cengine');
});


app.get('/trader',function(req,res,next) {
    res.render('../frontend/views/demos/trader');
});


app.get('/robot',function(req,res,next) {
    res.render('../frontend/views/demos/robot');
});


app.get('/drum',function(req,res,next) {
    res.render('../frontend/views/demos/drum');
});


app.get('/asteroids',function(req,res,next) {
    res.render('../frontend/views/demos/asteroids');
});


app.get('/blog',function(req,res,next) {
    res.render('../frontend/views/blog',{
        constructor:'This page is construction...'
    });
});


module.exports = app;

