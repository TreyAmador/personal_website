/*
    allows header bar to stick to the top
*/


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
    window.onscroll = animate_navbar;
});




/*
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
    window.onscroll = animate_navbar;
});
*/






/*

var animatedHeader = (function() {

    var docElem = document.documentElement,
        header = document.querySelector('.navbar-header'),
        didScroll = false,
        changeHeaderOn = 300;


    function scrollPage() {
        var sy = scrollY();
        if (sy >= changeHeaderOn) {
            classie.add
        }
    }


    function init() {
        window.addEventListener('scroll',function() {
            if (!didScroll) {
                didScroll = true;
                setTimeout();
            }
        }, false);
    }

});

*/

