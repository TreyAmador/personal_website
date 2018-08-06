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


var toggle_video = function() {
    $('.demo-video').parent().click(function() {
        if ($(this).children('.demo-video').get(0).paused) {
            $(this).children('.demo-video').get(0).play();
            $(this).children('.playpause').animate({
                opacity:'0.0',
                width:'+=40px',
                height:'+=40px',
                
            },400);
        } else {
            $(this).children('.demo-video').get(0).pause();
            $(this).children('.playpause').animate({
                opacity:'1.0',
                width:'-=40px',
                height:'-=40px',
                
            },200);
        }
    });
}


$(document).ready(function() {
    demo_toggle();
    toggle_video();
});

