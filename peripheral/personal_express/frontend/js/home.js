/*
    a jQuery transition effect
*/



var anchor_listener = function() {
    var from_top = 60;
    $('.home-directory a').click(function() {
        var anchor_name = $(this).attr('name');
        var distance = $('#'+anchor_name).offset().top-from_top;
        $('html,body').animate({
            'scrollTop': distance
        },distance);
    });
}



var slide_fade = function() {
    $('.entry-image').hover(function() {
        $(this).find('.entry-placard').animate({
            opacity:'0.7'
        },500,'linear');
        //$(this).find('.entry-banner').animate({
        //    opacity:'1.0',
        //    left:'+=30px'
        //},500,'linear');
    }, function() {
        $(this).find('.entry-placard').animate({
            opacity:'0.0'
        },500,'linear');
        //$(this).find('.entry-banner').animate({
        //    opacity:'0.0',
        //    left:'-=30px'
        //},500,'linear');
    });
}


var demo_popup = function() {

    const entries = {
        'cengine':'',
        'trader':'',
        'robot':'',
        'asteroids':'',
        'drums':''
    };

    $('.entry-image a').each(function() {
        $(this).click(function(event) {

            //console.log($(this).attr('class'));

            //$('.home-page').css({
            //    'background-color':'rgba(0,0,0,0.85)'
            //});

            
            
            
        });
    });

}


$(document).ready(function() {
    anchor_listener();
    //image_scroll();
    slide_fade();
    demo_popup();
});


