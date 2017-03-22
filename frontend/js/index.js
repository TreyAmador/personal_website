/*
    allows header bar to stick to the top
*/

/*
console.log('pre script');
$.holdReady(true);
$.getScript('home.js', function() {
    console.log('get script');
    $.holdReady(false);
});

*/


/*
var add_parallax = function(addEvent) {
    var element = '#parallax-element';
    var prlx = $(element);
    console.log(prlx);
    const y_init = parseInt(prlx.css('top'),10);
    console.log(y_init);
    function parallax() {
        prlx = $(element);
        var y_offset = window.pageYOffset;
        var y_pos = y_init+(-0.3*(y_offset))+'px';
        prlx.css('top',y_pos);
    }
    addEvent(window,'scroll',parallax);
}
*/

/*
var add_header_animation = function(addEvent) {
    var navbar = $('.navbar-header'),
        offset = 200;   // offset should be initial position of header bar
    function animate_navbar() {
        if (window.pageYOffset > offset)
            navbar.addClass('navbar-header-shrink');
        else
            navbar.removeClass('navbar-header-shrink');
    }
    addEvent(window,'scroll',animate_navbar);
}


var add_sticky_header = function(addEvent) {
    var navbar = $('.navbar-header');
    var pos_init = parseInt(navbar.offset().top,10);
    function stick_navbar() {
        if ($(window).scrollTop() > pos_init) {
            navbar.css({position: 'fixed', top: '0px'});
        } else {
            navbar.css({position: 'static', top: pos_init+'px'});
        }
    }
    addEvent(window,'scroll',stick_navbar);
}


function image_hover() {
    $('.image-git').on({
        mouseenter: function() {
            $(this).css('opacity',0.5);
        },
        mouseleave: function() {
            $(this).css('opacity',1.0);
        }
    });
}

*/

/* header bar shrinks once there is a scroll down window */


/*
$(document).ready(function() {
    
    function image_listener() {
        $('#image-git').click(function() {
            $('#image-git').css('background-position-x','100px');
        });
    }

    addEvent($('#image-git'),'load',image_listener);

});
*/

/*
$(document).ready(function() {
    window.addEventListener('load',function() {
        
        $('.image-git').click(function() {
            $(this);
        });
        
    });
});
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



