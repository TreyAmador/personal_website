/*
    a backend emailing system
    taking advantage of nodemailer
    sends to encrypted email address
*/



var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');


module.exports = function(app) {

    app.post('/contact',function(req,res,next) {

        var transporter = nodemailer.createTransport(smtpTransport({
            service:'Gmail',
            secure:false,
            port:25,
            auth:{
                user:'6709413@gmail.com',
                pass:'' // this doesn't work
            },
            tls:{
                rejectUnauthorized:false
            }
        }));

        var username = req.body.username;
        var subject = req.body.subject;
        var email = req.body.email;
        var textbody = req.body.textbody;

        var mailOptions = {
            from:username+' <6709413@gmail.com>',
            to:'treyminator90@gmail.com',
            subject:subject+' <automated personal site>',
            text:textbody+'\n\n'+'From: '+email
        }

        res_msg = transporter.sendMail(mailOptions,function(error,info) {
            var msg = '';
            if (error) {            
                return 'There was an error sending the message!';
            } else {
                return 'Message sent successfully!';
            }
        });
    });

}







/*
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');


var Emailer = function(username,subject,email,textbody) {

    var res_msg = '';

    var transporter = nodemailer.createTransport(smtpTransport({
        service:'Gmail',
        secure:false,
        port:25,
        auth:{
            user:'6709413@gmail.com',
            pass:'A2scn37x' // this doesn't work
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

    res_msg = transporter.sendMail(mailOptions,function(error,info) {
        var msg = '';
        if (error) {            
            msg = 'There was an error sending the message!';
        } else {
            msg = 'Message sent successfully!';
        }
        console.log('transporter',msg);
        transporter.close();
        return msg;
    });
    console.log('after sent backend',res_msg);

    //console.log(msg);
    return res_msg;
}


module.exports = Emailer;

*/
