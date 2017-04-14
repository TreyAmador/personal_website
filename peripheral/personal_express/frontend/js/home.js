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


/*
var image_scroll = function() {
    var poses = [];
    $('.entry-handle').each(function(i,entry) {
        poses.push(parseInt($(this).css('top'),10));
        var window_offset = window.pageYOffset;
        var offset = poses[i] - window_offset;
        $(this).css('top',offset);
    });
    $(document).scroll(function() {
        var window_top = window.pageYOffset;
        $('.entry-handle').each(function(i,entry) {
            var offset = poses[i] - window_top;
            $(this).css('top',offset);
        });
    });
}
*/


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

            console.log($(this).attr('class'));
            $('.home-page').css({
                'background-color':'rgba(0,0,0,0.5)'
            });
            
        });
    });

}


$(document).ready(function() {
    anchor_listener();
    //image_scroll();
    slide_fade();
    demo_popup();
});


