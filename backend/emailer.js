

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

// console.log(req.body.username,req.body.subject,req.body.email,req.body.textbody);

var Emailer = function(username,subject,email,textbody) {

    var res_msg = '';

    var transporter = nodemailer.createTransport(smtpTransport({
        service:'Gmail',
        secure:false,
        port:25,
        auth:{
            user:'6709413@gmail.com',
            pass:'A2scn37x'
        },
        tls:{
            rejectUnauthorized:false
        }
    }));

    var mailOptions = {
        from:username+' <6709413@gmail.com>',
        to:'treyminator90@gmail.com',
        subject:subject+' <automated personal site>',
        text:textbody+'\n\n'+'From: '+email
    }

    transporter.sendMail(mailOptions,function(error,info) {
        var message = '';
        if (error) {
            res_msg = 'There was an error sending the message!';
        } else {
            res_msg = 'Message sent successfully!';
        }
        transporter.close();
    });

    return res_msg;

}


module.exports = Emailer;

