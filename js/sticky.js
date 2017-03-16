/*
    allows header bar to stick to the top
*/


$(document).ready(function() {
    var nav = $('.nav');
    var delta_y = nav.offset().top;
    var is_fixed = false;
    function scroll() {
        var should_fix = $(document).scrollTop() > delta_y;
        if (should_fix && !is_fixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                left: nav.offset().left,
                width: nav.width()
            });
            is_fixed = true;
        } else if (!should_fix && is_fixed) {
            nav.css({
                position: 'static'
            });
            is_fixed = false;
        }
    }
    document.onscroll = scroll;
});



