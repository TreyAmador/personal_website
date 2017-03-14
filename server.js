var express = require('express')
var app = express()
var pug = require('pug')
var bootstrap = require('bootstrap')


var api = require('./routes/router.js')
app.use('/',api)

//app.set('view engine','pug')
app.use(express.static(path.join(__dirname,'views')))


// figure out how to set in development mode
//app.configure('development',function(){
//    app.locals.pretty = true
//})

var port_num = 8080
app.set('port',process.env.PORT || port_num)
var server = app.listen(app.get('port'), function() {
    var host = server.address().address
    var port = server.address().port
    console.log('Server listening on port '+app.get('port')+' at '+host)
})

