/*
    a jQuery transition effect
*/


/*

$(document).ready(function() {
    var placard = $('.entry-placard'),
        entry = $('.entry-image');
    var placard_height = parseInt(placard.css('height'),10),
        placard_width = parseInt(placard.css('width'),10),
        entry_height = parseInt(entry.css('height'),10),
        entry_width = parseInt(entry.css('width'),10);    
    var delta_y = Math.abs(entry_height-placard_height)/2,
        delta_x = Math.abs(entry_width-placard_width)/2;
    var entry_headline = $('.entry-headline');
    entry.hover(function() {
        placard.animate({
            left:'-='+delta_x+'px',
            top:'-='+delta_y+'px',
            opacity:'0.8'
        },250,'linear');
        entry_headline.animate({
            left:'+='+delta_x+'px',
            top:'-='+delta_y+'px',
            opacity:'1.0'
        },250,'linear');
    },
    function() {
        placard.animate({
            left:'+='+delta_x+'px',
            top:'+='+delta_y+'px',
            opacity:'0.0'
        },400,'linear');
        entry_headline.animate({
            left:'-='+delta_x+'px',
            top:'+='+delta_y+'px',
            opacity:'0.0'
        },400,'linear');
    });
});

*/





var slide_fade = function() {
    var placard = $('.entry-placard'),
        entry = $('.entry-image');
    var placard_height = parseInt(placard.css('height'),10),
        placard_width = parseInt(placard.css('width'),10),
        entry_height = parseInt(entry.css('height'),10),
        entry_width = parseInt(entry.css('width'),10);    
    var delta_y = Math.abs(entry_height-placard_height)/2,
        delta_x = Math.abs(entry_width-placard_width)/2;
    var entry_headline = $('.entry-headline');
    entry.hover(function() {
        placard.animate({
            left:'-='+delta_x+'px',
            top:'-='+delta_y+'px',
            opacity:'0.8'
        },250,'linear');
        entry_headline.animate({
            left:'+='+delta_x+'px',
            top:'-='+delta_y+'px',
            opacity:'1.0'
        },250,'linear');
    },
    function() {
        placard.animate({
            left:'+='+delta_x+'px',
            top:'+='+delta_y+'px',
            opacity:'0.0'
        },400,'linear');
        entry_headline.animate({
            left:'-='+delta_x+'px',
            top:'+='+delta_y+'px',
            opacity:'0.0'
        },400,'linear');
    });
}



var initialize = function() {
    slide_fade();
    
}


$(document).ready(initialize);







