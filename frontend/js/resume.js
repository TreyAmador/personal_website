/*
    client side resume functionality
*/


var cursor = function() {
    /*
    $('.resume-links div span').hover(function() {
        $(this).css('cursor','pointer');
        $(this).css(
            'border-bottom',
            "1px solid rgba(255,192,203,1.0)")
    },function() {
        $(this).css(
            'border-bottom',
            "1px solid rgba(255,192,203,0.0)")
    });
    */

    $('.resume-links div span').hover(function() {
        $(this).css('cursor','pointer');
    });
}


var initialize = function() {
    cursor();
}


$(document).ready(function() {
    initialize();
});

