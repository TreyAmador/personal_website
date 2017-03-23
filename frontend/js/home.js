/*
    a jQuery transition effect
*/


var addEvent = function(object,type,callback) {
    if (object == null || typeof(object) == 'undefined')
        return;
    if (object.addEventListener)
        object.addEventListener(type,callback,false);
    else if (object.attachEvent)
        object.attachEvent('on'+type, callback);
    else
        object['on'+type] = callback;
}


var slide_fade = function() {
    var placard = $('.entry-placard'),
        entry = $('.entry-handle');
    var entry_height = parseInt(entry.css('height'),10),
        entry_width = parseInt(entry.css('width'),10),
        placard_height = parseInt(placard.css('height'),10),
        placard_width = parseInt(placard.css('width'),10);
    var delta_y = Math.abs(entry_height-placard_height)/2,
        delta_x = Math.abs(entry_width-placard_width)/2;
    var entry_headline = $('.entry-headline');
    $('.entry-handle').hover(function() {
        $(this).find('.entry-placard').animate({
            left:'-='+delta_x+'px',
            top:'-='+delta_y+'px',
            opacity:'0.8'
        },250,'linear');
        $(this).find('.entry-headline').animate({
            left:'+='+delta_x+'px',
            top:'-='+delta_y+'px',
            opacity:'1.0'
        },250,'linear');
    },function() {
        $(this).find('.entry-placard').animate({
            left:'+='+delta_x+'px',
            top:'+='+delta_y+'px',
            opacity:'0.0'
        },400,'linear');
         $(this).find('.entry-headline').animate({
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


