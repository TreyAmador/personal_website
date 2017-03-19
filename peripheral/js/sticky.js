/*
    allows header bar to stick to the top
*/

/* allows header bar to stick to top of screen when scrolling down */
$(window).ready(function() {
    var navbar = $('.navigation-bar');
    var delta = navbar.offset().top;
    function scroll() {
        if ($(window).scrollTop() > delta) {
            $('.navigation-container').addClass('fixed');
        } else {
            $('.navigation-container').removeClass('fixed');
        }
    }
    window.onscroll = scroll;
});


