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



var project_hover = function() {
    $('.entry').each(function(index,value) {
        $(this).hover(function() {

            $(this).find('.entry-placard').animate({
                opacity:'0.9'
            },300);
            
            var headline = $(this).find('.entry-headline');
            headline.find('.project').animate({
                opacity:'1.0',
                bottom:'+=30px'
            },{
                duration:500,
                easing:'swing',
            });

            headline.find('.language').animate({
                opacity:'1.0',
                bottom:'+=10px'
            },{
                duration:500,
                easing:'swing'
            });
            
        },function() {

            $(this).find('.entry-placard').animate({
                opacity:'0.0'
            },300);

            var headline = $(this).find('.entry-headline');
            headline.find('.project').animate({
                opacity:'0.0',
                bottom:'-=30px'
            },{
                duration:200,
                easing:'swing',
            });

            headline.find('.language').animate({
                opacity:'0.0',
                bottom:'-=10px'
            },{
                duration:200,
                easing:'swing'
            });

        });
    });
}


var underline_hover = function() {
    $('.name-hover').hover(function() {
        $(this).animate({
            borderBottomColor:'rgba(0,0,0,1.0)'
        });
    }, function() {
        $(this).animate({
            borderBottomColor:'rgba(0,0,0,0.0)'
        });
    });
}


// expand contact panel if at bottom
var contact_expand = function() {
    var expanded = false;
    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $('.home-contact').animate({
                left:'3%',
                width:'94%',
                height:'92%'
            });
            expanded = true;
        } else if (expanded === true) {
            $('.home-contact').animate({
                left:'0',
                width:'100%',
                height:'100%'
            },500);
            expanded = false;
        }
    });
}


$(document).ready(function() {
    anchor_listener();
    project_hover();
    //underline_hover();
    //demo_popup();
    //contact_expand();
});


