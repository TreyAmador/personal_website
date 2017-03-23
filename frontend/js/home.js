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


/*

var slide_fade = function() {
    
    $('.entry-handle').hover(function() {

        var placard = $(this).find('.entry-placard');
        var entry_height = parseInt($(this).css('width'),10);
        var entry_width = parseInt($(this).css('height'),10);
        var placard_height = parseInt(placard.css('height'),10);
        var placard_width = parseInt(placard.css('width'),10);
        var delta_y = Math.abs(entry_height-placard_height)/2;
        var delta_x = Math.abs(entry_width-placard_width)/2;

        function delta(dimension) {
            var entry_dimension = parseInt($(this).css(dimension),10);
            var placard_dimension = parseInt(placard.css(dimension),10);
            return Math.abs(entry_dimension-placard_dimension)/2;
        }

        placard.animate({
            left:'-='+delta_x+'px',
            top:'+='+delta_y+'px',
            opacity:'0.8'
        },150,'linear');
        $(this).find('.entry-headline').animate({
            left:'+='+delta_x+'px',
            opacity:'1.0'
        },150,'linear');
    },function() {

        var placard = $(this).find('.entry-placard');
        var entry_height = parseInt($(this).css('height'),10);
        var entry_width = parseInt($(this).css('width'),10);
        var placard_height = parseInt(placard.css('height'),10);
        var placard_width = parseInt(placard.css('width'),10);
        var delta_y = Math.abs(entry_height-placard_height)/2;
        var delta_x = Math.abs(entry_width-placard_width)/2;

        placard.animate({
            left:'+='+delta_x+'px',
            top:'-='+delta_y+'px',
            opacity:'0.0'
        },200,'linear');
         $(this).find('.entry-headline').animate({
            left:'-='+delta_x+'px',
            opacity:'0.0'
        },200,'linear');
    });
}

*/




var slide_fade = function() {
    function delta(entry,placard,dimension) {
        var entry_dimension = parseInt($(entry).css(dimension),10);
        var placard_dimension = parseInt(placard.css(dimension),10);
        return Math.abs(entry_dimension-placard_dimension)/2;
    }
    $('.entry-handle').hover(function() {
        var placard = $(this).find('.entry-placard');
        placard.animate({
            left:'-='+delta(this,placard,'width')+'px',
            top:'+='+delta(this,placard,'height')+'px',
            opacity:'0.8'
        },150,'linear');
        $(this).find('.entry-headline').animate({
            left:'+='+delta(this,placard,'width')+'px',
            opacity:'1.0'
        },150,'linear');
    },function() {
        var placard = $(this).find('.entry-placard');
        placard.animate({
            left:'+='+delta(this,placard,'width')+'px',
            top:'-='+delta(this,placard,'height')+'px',
            opacity:'0.0'
        },200,'linear');
         $(this).find('.entry-headline').animate({
            left:'-='+delta(this,placard,'width')+'px',
            opacity:'0.0'
        },200,'linear');
    });
}


var initialize = function() {
    slide_fade();
}


$(document).ready(initialize);


