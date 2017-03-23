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
    var placard = $('.entry-placard'),
        entry = $('.entry-handle');
    var entry_height = parseInt(entry.css('height'),10),
        entry_width = parseInt(entry.css('width'),10),
        placard_height = parseInt(placard.css('height'),10),
        placard_width = parseInt(placard.css('width'),10);
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

*/



var slide_fade = function() {
    var entries = $('.entry-handle'),
        placards = $('.entry-placard'),
        headlines = $('.entry-headline');
    for (var i = 0; i < entries.length; ++i) {
        var entry_height = parseInt(entries.eq(i).css('height'),10),
            entry_width = parseInt(entries.eq(i).css('width'),10),
            placard_height = parseInt(placards.eq(i).css('height'),10),
            placard_width = parseInt(placards.eq(i).css('width'),10);
        var delta_y = Math.abs(entry_height-placard_height)/2,
            delta_x = Math.abs(entry_width-placard_width)/2;
        entries.eq(i).hover(function() {
            placards.eq(i).animate({
                left:'-='+delta_x+'px',
                top:'-='+delta_y+'px',
                opacity:'0.8'
            },250,'linear');
            headlines.eq(i).animate({
                left:'+='+delta_x+'px',
                top:'-='+delta_y+'px',
                opacity:'1.0'
            },250,'linear');
        },
        function() {
            placards.eq(i).animate({
                left:'+='+delta_x+'px',
                top:'+='+delta_y+'px',
                opacity:'0.0'
            },400,'linear');
            headlines.eq(i).animate({
                left:'-='+delta_x+'px',
                top:'+='+delta_y+'px',
                opacity:'0.0'
            },400,'linear');
        });
    }

    /*
    var placard = $('.entry-placard'),
        entry = $('.entry-handle');
    var entry_height = parseInt(entry.css('height'),10),
        entry_width = parseInt(entry.css('width'),10),
        placard_height = parseInt(placard.css('height'),10),
        placard_width = parseInt(placard.css('width'),10);
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
    */



    /*
    var placards = $('.entry-placard').each(function(){});
    var headlines = $('.entry-headline').each(function() {});
    $('.entry-handle').each(function(i) {
        var entry_height = parseInt($(this).css('height'),10),
            entry_width = parseInt($(this).css('width'),10),
            placard_height = parseInt($(this).css('height'),10),
            placard_width = parseInt($(this).css('width'),10);
         var delta_y = Math.abs(entry_height-placard_height)/2,
            delta_x = Math.abs(entry_width-placard_width)/2;
        $(this).hover(function() {
            placards.eq(i).animate({
                left:'-='+delta_x+'px',
                top:'-='+delta_y+'px',
                opacity:'0.8'
            },250,'linear');
            headlines.eq(i).animate({
                left:'+='+delta_x+'px',
                top:'-='+delta_y+'px',
                opacity:'1.0'
            },250,'linear');
        },
        function() {
            placards.eq(i).animate({
                left:'+='+delta_x+'px',
                top:'+='+delta_y+'px',
                opacity:'0.0'
            },400,'linear');
            headlines.eq(i).animate({
                left:'-='+delta_x+'px',
                top:'+='+delta_y+'px',
                opacity:'0.0'
            },400,'linear');
        });
    });
    */

}



var initialize = function() {
    slide_fade();
}


$(document).ready(initialize);


