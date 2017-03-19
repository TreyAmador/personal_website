/**
 * server
 */

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var api = require('./backend/router');

app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',api);

var port_num = 8080;
app.set('port',process.env.PORT || port_num);
var server = app.listen(app.get('port'), function() {
    var host = server.address().address
    var port = server.address().port
    console.log('Server listening on port '+app.get('port')+' at '+host)
});

