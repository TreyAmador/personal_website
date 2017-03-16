

$(document).ready(function() {

    var menu = $('.navbar-default');
    var delta_y = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= delta_y) {
            $('.navbar-default').addClass('navbar-fixed-top');
            $('.content').addClass('menu-padding');
        } else {
            $('.navbar-default').removeClass('navbar-fixed-top');
            $('.content').removeClass('menu-padding');
        }
    }

    document.onscroll = scroll;
});


