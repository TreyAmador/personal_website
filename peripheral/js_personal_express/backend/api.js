

var express = require('express');
var app = express.Router();
var path = require('path');
//var emailer = require('./emailer.js');

var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');

app.get('/',function(req,res,next) {
    res.render('../frontend/views/home.ejs')
});


app.get('/about',function(req,res,next) {
    res.render('../frontend/views/about.ejs');
});


app.get('/contact',function(req,res,next) {
    res.render('../frontend/views/contact.ejs');
});






/*

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        xoauth2: xoauth2.createXOAuth2Generator({
            user:'6709413@gmail.com',
            clientId:'334404444051-5qjhttgj0gj5c4i3ipokems6rm27i6a2.apps.googleusercontent.com',
            clientSecret:'lSxdC7CzlbKui5IQrKSfEvlV',
            refreshToken:'1/40GBKhOW9kYovgncudkQ_B1FDCwg6ZryAwKV4UdVUJQ'
        })
    }
});

var mailOptions = {
    from:'6709413@gmail.com',
    to:'autopsiedphilosophe@gmail.com',
    subject:'Nodemailer test',
    text:'Hello world!'
}


app.post('/contact',function(req,res,next) {
    transporter.sendMail(mailOptions,function(err,info) {
        if (err) {
            console.log('error');
            return res.send('error');
        } else {
            console.log('success!');
            return res.send('success!');
        }
    });
});

*/


/*

var smtpTransport = nodemailer.createTransport({
    service:'Gmail',
    auth: {
        user:'autopsiedphilosophe@gmail.com',
        pass:'Fn87p2gZhX'
    }
});

*/



/*

app.post('/contact',function(req,res,next) {
    
    // the 'from' space will be the fill-in?
    var mailOptions = {
        to:'6709413@gmail.com',
        from:'autopsiedphilosophe@gmail.com',
        subject:'Test Subject',
        text:'hey there, you!'
    }
    smtpTransport.sendMail(mailOptions,function(err,info) {
        if (err) {
            console.log('error!');
            return res.send('hwsadf');
        } else {
            console.log('worked!');
            return res.send('alskdfjs');
        }
    });
    

});

*/


/*
// send email back here!
app.post('/contact',function(req,res,next) {
    var transporter = nodemailer.createTransport({
        service:'gmail',
        host:'smtp.gmail.com',
        auth: {
            user:'6709413@gmail.com',
            pass:'A2scn37x'
        }
    });
    var textbody = 'Hi. This is the textbody.';
    var mailOptions = {
        from:'6709413@gmail.com',
        to:'tmamador@cpp.edu',
        subject:'Test subject',
        text:textbody
    };
    transporter.sendMail(mailOptions,function(err,info) {
        if (err) {
            console.log('error sending email');
            res.send('error');
        } else {
            console.log('email sent successfully');
            res.send('success');
        }
    });
    //return res.send({user_msg:'All went well!'});
});
*/


module.exports = app;

