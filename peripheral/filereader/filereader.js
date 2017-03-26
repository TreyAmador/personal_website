/*
    reads files
*/

//'use strict'

var fs = require('fs');


function FileManager() {
    //this.fs = require('fs');
    //this.files = [];
}


FileManager.prototype.filedir = function(fs,path,filearr) {
    return new Promise(function(resolve,reject) {
        fs.readdir(path,function(err,files) {
            if (err) {
                console.log('directory error');
                reject('files not found');
            } else {
                filearr.push.apply(filearr,files);
                console.log('directory success');
                console.log(filearr);
                resolve(files);
            }
        });
    });
}


FileManager.prototype.readfile = function(fs,files) {
    return new Promise(function(resolve,reject) {
        files.forEach(function(file,i,files) {
            console.log('files include',file);
            
        });
    });
}


module.exports = function(req,res,next) {
    var manager = new FileManager();
    var filepath = './textdocs/';
    var files = [];
    manager.filedir(fs,filepath,files)
        .then(manager.readfile.bind(fs,files))
        .catch(function() {
            console.log('oh no');
        });
    next();
}

