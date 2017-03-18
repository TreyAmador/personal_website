/**
 * backend router
 */

var express = require('express');
var router = express.Router();

var stuff = ['abc','def','ghi'];


router.get('/',function(req,res) {
    console.log('i am in the back');
    //return res.send('howdy from the main page');
    return res.json(stuff);
});


module.exports = router;

