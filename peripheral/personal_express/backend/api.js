/*
    backend routing system
*/


var express = require('express');
var app = express.Router();
var path = require('path');


app.get('/',function(req,res,next) {
    res.render('../frontend/views/home')
});


app.get('/about',function(req,res,next) {
    res.render('../frontend/views/about');
});


app.get('/contact',function(req,res,next) {
    res.render('../frontend/views/contact');
});


app.post('/contact',function(req,res,next) {    
    res.send('Message sent!');
});


var demo_factory = function(routing) {

    var Demo = function(media,header,textbody) {
        this.media = media;
        this.header = header;
        this.textbody = textbody;
    }

    var Demos = {
        '/cengine': new Demo(
            '<video controls><source src="../media/cengine.mp4" type="video/mp4"></video>',
            'C++ game engine with SDL graphics library',
            ''
        ),
        '/trader': new Demo(
            'trader video',
            '',
            ''
        ),
        '/robot': new Demo(
            '',
            '',
            ''
        ),
        '/drum': new Demo(
            '',
            '',
            ''
        ),
        '/asteroids': new Demo(
            '',
            '',
            ''
        )
    }

    return Demos[routing];
}


app.get('/cengine',function(req,res,next) {
    var demo = demo_factory('/cengine');

    res.render('../frontend/views/demo');

});


app.get('/blog',function(req,res,next) {
    res.render('../frontend/views/blog',{
        constructor:'This page is construction...'
    });
});


module.exports = app;

