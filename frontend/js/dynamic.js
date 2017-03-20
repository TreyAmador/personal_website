/*
    allows header bar to stick to the top
*/


var addEvent = function(object,type,callback) {
    if (object == null || typeof(object) == 'undefined')
        return;
    if (object.addEventListener) {
        object.addEventListener(type,callback,false);
    } else if (object.attachEvent) {
        object.attachEvent('on'+type, callback);
    } else {
        object['on'+type] = callback;
    }
}







/* header bar shrinks once there is a scroll down window */
$(document).ready(function() {
    var navbar = $('.navbar-header'),
        offset = 300;
    function animate_navbar() {
        if (window.pageYOffset > offset) {
            navbar.addClass('navbar-header-shrink');
        } else {
            navbar.removeClass('navbar-header-shrink');
        }
    }
    //window.onscroll = animate_navbar;
    addEvent(window,'scroll',animate_navbar);
});



