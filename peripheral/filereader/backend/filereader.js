/*
    reads files
*/


var fs = require('fs');


var filedir = function(files) {
    var filepath = './backend/posts/';
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


// change this to a docx?
var convertHTML = function(data) {
    var text = data.toString();

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


/*
// change this to a docx?
var convertHTML = function(data) {
    var text = data.toString().replace(reline,'');
    var title = delimit(text,retitle);
    var sub = delimit(text,resub);
    var para = delimit(text,repara);
    console.log(title,sub,para);
}

const retitle = new RegExp( '(.*)<title>(.*)<title>(.*)','g');
const resub = new RegExp('(.*)<sub>(.*)<sub>(.*)','g');
//const repara = new RegExp('(.*)<p>(.*)<p>(.*)','g');
const repara = /(.*)<p>(.*)<p>(.*)/g;
const reline = new RegExp('\r|\n|\r\n','g');

var delimit = function(text,regex) {
    var sections = [],
        res;
    while(res = regex.exec(text)) {
        if (res) {
            sections.push(res[2]);
        }
    }
    return sections;
}

*/


