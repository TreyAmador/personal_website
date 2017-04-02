/*
    reads files
*/


var fs = require('fs');


var filedir = function(files) {
    var filepath = './posts/';
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


var storeHTML = function(data) {
    var pageHTML = data.toString();
    
    console.log(pageHTML);

    

}


var readfiles = function(files) {
    for (var i = 0; i < files.length; ++i) {
        var data;
        fileread(files[i],data)
            .then(storeHTML.bind(data))
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


