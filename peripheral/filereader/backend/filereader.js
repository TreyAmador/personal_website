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




/*
module.exports = function(options) {
    return function(req,res,next) {
        var files = [];
        filedir(files)
            .then(readfiles.bind(files))
            .catch(direrror);
        next();
    }
}
*/




//var $ = require('jquery');
var fs = require('fs');


var filedir = function(files) {
    var filepath = './backend/textdocs/';
    return new Promise(function(resolve,reject) {
        fs.readdir(filepath,function(err,res) {
            if (err) {
                reject('Files not found');
            } else {
                for (var i = 0; i < res.length; ++i)
                    files.push(filepath.concat(res[i]));
                resolve(files);
            }
        });
    });
}


var fileread = function(file,data) {
    return new Promise(function(resolve,reject) {
        fs.readFile(file,function(err,buffer) {
            if (err) {
                reject(file+' not read');
            } else {
                data = buffer;
                resolve(data);
            }
        });
    });
}


var convertHTML = function(data) {
    console.log(data);

}


var readfiles = function(files) {
    for (var i = 0; i < files.length; ++i) {
        var data = [];
        fileread(files[i],data)
            .then(convertHTML.bind(data))
            .catch(fileerror.bind(files[i]));
    }
}


var direrror = function() {
    console.log('Files not found in directory.');
}


var fileerror = function(file) {
    console.log('Error reading ' + file + '.');
}


module.exports = function(req,res,next) {
    var files = [];
    filedir(files)
        .then(readfiles.bind(files))
        .catch(direrror);
    next();
}



