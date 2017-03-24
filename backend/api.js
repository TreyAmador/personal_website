/**
 * backend router
 */

var express = require('express');
var router = express.Router();
var path = require('path');
var mime = require('mime');
var fs = require('fs');


router.get('/home',function(req,res) {
    return res.json('hey!');
});


/**
 * some more routing here!
 */
router.post('/download-resume',function(req,res,next) {
    
    //return res.send(new Buffer('download resume'));

    /*
    var file = __dirname.split('backend')[0]+
        'frontend/external/Amador_Trey_Resume.pdf';
    var filename = path.basename(file);
    var mimetype = mime.lookup(file);
    res.set('Content-disposition','attachment; filename='+filename);
    res.set('Content-type',mimetype);
    var filestream = fs.createReadStream(file);
    filestream.pipe(res);
    */
    /*
    var filepath = '/external/Amador_Trey_Resume.pdf';
    var file = 'Amador_Trey_Resume.pdf';
    res.download(__dirname+filepath,file,function() {
        if (err) {
            // handle error...
        } else {
            // decrement download credit
        }
    });
    */
    /*
    var filepath = __dirname.split('backend')[0]+
        'frontend/external/Amador_Trey_Resume.pdf';
    var outfile = 'Amador_Trey_Resume.pdf';
    res.download(filepath,outfile,function(err) {
        if (err) {
            console.log('Error',err);
        } else {
            console.log('Success');
        }
    });
    return res.json(outfile);
    */


    //var filepath = __dirname.split('backend')[0]+
    //    'frontend/external/Amador_Trey_Resume.pdf';
    //var outfile = 'Amador_Trey_Resume.pdf';
    //window.open(filepath);
    //return res.send(filepath);

    //window.open('/');

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



