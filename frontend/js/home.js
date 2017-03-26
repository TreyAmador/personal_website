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
    function delta(entry,placard,dimension) {
        var entry_dimension = parseInt($(entry).css(dimension),10);
        var placard_dimension = parseInt(placard.css(dimension),10);
        return Math.abs(entry_dimension-placard_dimension)/2;
    }
    $('.image-handle').hover(function() {
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


var image_scroll = function() {
    var poses = [];
    $('.entry-handle').each(function(i,entry) {
        poses.push(parseInt($(this).css('top'),10));
    });
    $(document).scroll(function() {
        var window_top = window.pageYOffset;
        $('.entry-handle').each(function(i,entry) {
            var offset = poses[i] - window_top;
            console.log(poses[i],window_top,offset);
            $(this).css('top',offset);
        });
    });
}


$(document).ready(function() {
    image_scroll();
    slide_fade();
});


