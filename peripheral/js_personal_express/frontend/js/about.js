/*
    client side resume functionality
*/


var addEvent = function(object,type,callback) {
    if (object == null || typeof(object) == 'undefined')
        return;
    if (object.addEventListener)
        object.addEventListener(type,callback,false);
    else if (object.attachEvent)
        object.attachEvent('on'+type, callback);
    else
        object['on'+type] = callback;
}


var cursor = function() {
    $('.resume-directory nav a').hover(function() {
        $(this).css('cursor','pointer');
    });
}


$(document).ready(function() {
    cursor();
});


