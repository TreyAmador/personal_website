var express = require('express')
var app = express()


var api = require('./routes/router.js')
app.use('/',api)


app.get('/', function(req,res){
    res.send('Howdy')
})


var port_num = 8080
app.set('port',process.env.PORT || port_num)
var server = app.listen(app.get('port'), function() {
    var host = server.address().address
    var port = server.address().port
    console.log('Server listening on port '+app.get('port')+' at '+host)
})
