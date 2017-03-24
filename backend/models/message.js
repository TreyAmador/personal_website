/*
    the model for user queries
*/


module.exports = function(mongoose) {
    mongoose.Promise = global.Promise;
    var MessageSchema = mongoose.Schema({
        username: {type: String, required: true},
        email: {type: String},
        subject: {type: String, required: true},
        textbody: {type: String, required: true},
        created_at: {type: Date, default: Date.now}
    });
    return mongoose.model('Message',MessageSchema);
}




//var mongoose = require('mongoose');
//module.exports = mongoose.model('Message',MessageSchema);

