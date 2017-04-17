/*
    loads 
*/


var demo_toggle = function() {

    $('.left-demo').hover(function() {
        $(this).animate({
            left:'-=20px'
        },300);
    }, function() {
        $(this).animate({
            left:'+=20px'
        },200);
    });

    $('.right-demo').hover(function() {
        $(this).animate({
            left:'+=20px'
        },300);
    }, function() {
        $(this).animate({
            left:'-=20px'
        },200);
    });
    
}


$(document).ready(function() {
    //load_directory();
    demo_toggle();
});

