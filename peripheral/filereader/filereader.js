/*
    reads files
*/

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
                    convertHTML(data);
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


