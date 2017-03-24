/*
    client side resume functionality
*/


var cursor = function() {
    $('.resume-links div span').hover(function() {
        $(this).css('cursor','pointer');
    });
}


$(document).ready(function() {
    cursor();
});


