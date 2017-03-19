/**
 * the server
 */

var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var api = require('./backend/api.js');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'frontend')));
app.use('/',api);

app.set('port',process.env.PORT || 8080);
app.listen(app.get('port'),function() {
    console.log('Server started on port '+app.get('port'));
});

