

$(document).ready(function() {
    $('.opaque').mouseenter(function() {
        $(this).animate({opacity: 1.0},200);
    });
    $('.opaque').mouseleave(function() {
        $(this).animate({opacity: 0.25},200);
    });
});

