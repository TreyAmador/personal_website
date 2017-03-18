/**
 * the server
 */

var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.set('port',process.env.PORT || 8080);
app.listen(app.get('port'),function() {
    console.log('Server started on port '+app.get('port'));
});
