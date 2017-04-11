

var express = require('express');
var app = express.Router();
var path = require('path');


app.get('/',function(req,res,next) {
    res.render('../frontend/views/home.ejs')
});


app.get('/about',function(req,res,next) {
    res.render('../frontend/views/about.ejs');
});


/*app.get('/open-resume',function(req,res,next) {
    window.open('../files/Amador_Trey_Resume.pdf');
});
*/

module.exports = app;
