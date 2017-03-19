/**
 * backend router
 */

var express = require('express');
var router = express.Router();
var path = require('path');

var stuff = 'hey!';

router.get('/home',function(req,res) {
    return res.json(stuff);

});


//router.get('/about', function(req,res) {
//    return res.send('hey');
//});


router.use('*', function(req,res,next) {
    var indexFile = path.resolve(__dirname,'../frontend/index.html');
    res.sendFile(indexFile);
});


module.exports = router;

