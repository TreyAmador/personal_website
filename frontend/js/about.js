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


/*
var cursor = function() {
    $('.resume-directory nav a').hover(function() {
        $(this).css('cursor','pointer');
    });
}
*/

/*
headline.find('.language').animate({
    opacity:'0.0',
    bottom:'-=10px'
},{
    duration:200,
    easing:'swing'
});
*/


var link_jump = function() {
    $('.resume-directory nav a').each(function(index,value) {
        $(this).hover(function() {            
            $(this).animate({
                top:'-=10px'
            },{
                duration:300,
                easing:'linear'
            });
        },function() {
            $(this).animate({
                top:'+=10px'
            },{
                duration:300,
                easing:'linear'
            });
        });
    });
}


$(document).ready(function() {
    //cursor();
    link_jump();
});


