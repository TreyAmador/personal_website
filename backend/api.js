/**
 * backend router
 */

var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/home',function(req,res) {
    return res.json('hey!');
});


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

