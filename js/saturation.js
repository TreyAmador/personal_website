

$(document).ready(function() {

    $('.opaque').mouseenter(function() {
        $(this).animate({opacity: 1},200);
    });

    $('.opaque').mouseleave(function() {
        $(this).animate({opacity: 0.5},200);
    });

});

