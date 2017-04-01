/*
    reads files
*/

/*

//'use strict'
const fs = require('fs');


function FileManager() {
    // empty file manager constructor
}


FileManager.prototype.filedir = function(path,filearr) {
    return new Promise(function(resolve,reject) {
        fs.readdir(path,function(err,files) {
            if (err) {
                reject('files not found');
            } else {
                filearr = files.map(function(x) {
                    return path.concat(x);
                });
                resolve(filearr);
            }
        });
    });
}


FileManager.prototype.convertHTML = function(file) {
    
}


FileManager.prototype.readfile = function(filepath,files) {
    return new Promise(function(resolve,reject) {
        var resolutions = 0;
        files.forEach(function(file,i) {
            fs.readFile(file,function(err,data) {
                if (err) {
                    reject('files not read');
                    return;
                } else {
                    // convert to html file
                    //convertHTML(data);
                    // this aint right
                    ++resolutions;
                }
            });
        });
        if (resolutions >= files.length) {
            resolve(files);
        }
    });
}


module.exports = function(req,res,next) {
    var files = [];
    var filepath = './textdocs/';
    var manager = new FileManager();
    manager.filedir(filepath,files)
        .then(manager.readfile.bind(filepath,files))
        .catch(function() {
            console.log('oh no');
        });
    next();
}

*/


var fs = require('fs');


var filedir = function(files) {
    var filepath = './textdocs/';
    return new Promise(function(resolve,reject) {
        fs.readdir(filepath,function(err,res) {
            if (err) {
                reject('Files not found');
            } else {
                files = res.map(function(file) {
                    return filepath.concat(file);
                });
                console.log(files);
                resolve('File list:',files);
            }
        });
    });
}



module.exports = function(req,res,next) {

    var files = [];
    filedir(files).then(function() {
        console.log(files);
    }).catch(function() {
        console.log('error');
    });
    

    next();
}



