/*
    allows header bar to stick to the top
*/


var add_header_animation = function(addEvent) {
    if (addEvent == null || typeof(addEvent) == 'undefined')
        return;
    var navbar = $('.navbar-header'),
        offset = 500;   // offset should be initial position of header bar
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



/* header bar shrinks once there is a scroll down window */
$(document).ready(function() {
    add_header_animation(addEvent);
    add_sticky_header(addEvent);
});



