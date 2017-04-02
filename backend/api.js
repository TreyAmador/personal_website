/**
 * backend router
 */

var express = require('express');
var router = express.Router();
var path = require('path');
var mime = require('mime');
var fs = require('fs');


var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/personal');
var Message = require('./models/message')(mongoose);


router.get('/home',function(req,res) {
    return res.json('hey!');
});


/**
 * some more routing here
 */

router.post('/user-message',function(req,res) {

    var msg = new Message({
        username: req.body.username,
        email: req.body.email,
        subject: req.body.subject,
        textbody: req.body.textbody
    });

    msg.save(function(err,msgs) {
        if (err) {
            return res.send({
                errormsg:'Datase insertion error!',
                code:500
            });
        }
        return res.send({
            messages: msgs,
            code: 200
        });
    });
});


// bloggers!




router.get('/404',function(req,res,next) {
    return res.send('404');
});


router.get('/403',function(req,res,next) {
    var err = new Error('not allowed!');
    err.status = 403;
    next(err);
});


router.get('/500',function(req,res,next) {
    next(new Error('Server error!'));
});


router.use('*', function(req,res,next) {
    var indexFile = path.resolve(
        __dirname,'../frontend/index.html');
    res.sendFile(indexFile);
});


router.use(function(req, res, next){
    res.status(404);

    res.format({
        html: function() {
            res.render('404', { url: req.url })
        },
        json: function() {
            res.json({ error: 'Not found' })
        },
        default: function() {
            res.type('txt').send('Not found')
        }
    })
});


router.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('500', { error: err });
});


module.exports = router;


/**
 * 
 * ********************************************************* *
 *                  Features to add                          *
 * ********************************************************* *
 * 
 *      online resume
 *          most important for the time being
 *          download pdf format
 *      project demo video/audio
 *          game engine demo (w/ rainbow background)
 *          mixed/unmixed audio samples from drum machine
 *          webscraping data?
 *          java asteroids
 *      tech/philosophy blog posts
 *          script to update text files in post?
 *      add physics html5 game
 *          high scores on mongo db
 * 
 * 
 * ***********************************************************
 *                  Architecture
 * ***********************************************************
 * 
 *      main page 
 *          'Trey Amador' header in orange
 *          picture at desk
 *      orange (?) sidebar
 *          links for
 *              resume
 *              project demos
 *              blog posts
 *              game
 *              see source code
 *                  github.com/TreyAmador
 *      mean stack
 *          pug view engine ?
 *          mongo db
 *              user scores
 *              blog posts?
 * 
 * 
 */



