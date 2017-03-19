/**
 * entry point for server
 */

var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

app.use(express.static(path.join(__dirname,'public')));
//var api = require('./backend/api.js');
//var frontend = require('./controller/controller');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//app.use('/',api);


app.set('port',process.env.PORT || 8080);
app.listen(app.get('port'), function() {
    console.log('Server started on port '+app.get('port'));
});

