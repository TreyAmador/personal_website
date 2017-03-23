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


/*
$(document).ready(function() {
    var entry = $('.entry'),
        placard = $('.transition-entry');
    entry.hover(function() {
        placard.animate({
            left:'-=50px',
            top:'-=50px',
            opacity:'0.8'
        });
    },
    function() {
        placard.animate({
            left:'+=50px',
            top:'+=50px',
            opacity:'0.0'
        });
    });
});
*/



$(document).ready(function() {
    var placard = $('.transition-entry'),
        entry = $('.entry');
    var placard_height = parseInt(placard.css('height'),10),
        placard_width = parseInt(placard.css('width'),10),
        entry_height = parseInt(entry.css('height'),10),
        entry_width = parseInt(entry.css('width'),10);    
    var delta_y = Math.abs(entry_height-placard_height)/2,
        delta_x = Math.abs(entry_width-placard_width)/2;
    entry.hover(function() {
        placard.animate({
            left:'-='+delta_x+'px',
            top:'-='+delta_y+'px',
            opacity:'0.8'
        },250,'linear');
    },
    function() {
        placard.animate({
            left:'+='+delta_x+'px',
            top:'+='+delta_y+'px',
            opacity:'0.0'
        },400,'linear');
    });
});



