/*
    loads 
*/




var load_directory = function() {
    
    var urls = [
        '/cengine',
        '/trader',
        '/asteroids',
        '/robot',
        '/drum'
    ];
    
    var http = $(location).attr('href').split('/');
    var last = http.length-1;
    //console.log(http);
    //console.log( http[last] );
    


}


$(document).ready(function() {
    load_directory();
});

