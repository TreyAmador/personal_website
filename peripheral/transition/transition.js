/*
    a jQuery transition effect
*/


/*
$(document).ready(function() {
    var placard = $('.transition-entry');
    placard.click(function() {
        placard.css('background-color','rgba(0,0,0,1.0)');
    });
});
*/


/*
$(document).ready(function() {
    var placard = $('.transition-entry');
    placard.hover(function() {
        placard.css('background-color','rgba(0,0,0,1.0)');
    },
    function() {
        placard.css('background-color','rgba(0,0,0,0.0)');
    });
});
*/


$(document).ready(function() {

    var placard = $('.transition-entry');

    placard.hover(function() {
        placard.animate({
           opacity:'0.5'
        });
    },
    function() {
        placard.animate({
            opacity:'0.0'
        });
    });


});






