/*
    a jQuery transition effect
*/



var anchor_listener = function() {
    var from_top = 60;
    $('.home-directory a').click(function() {
        var anchor_name = $(this).attr('name');
        var distance = $('#'+anchor_name).offset().top-from_top;
        $('html,body').animate({
            'scrollTop': distance
        },distance);
    });
}


var image_scroll = function() {
    var poses = [];
    $('.entry-handle').each(function(i,entry) {
        poses.push(parseInt($(this).css('top'),10));
        var window_offset = window.pageYOffset;
        var offset = poses[i] - window_offset;
        $(this).css('top',offset);
    });
    $(document).scroll(function() {
        var window_top = window.pageYOffset;
        $('.entry-handle').each(function(i,entry) {
            var offset = poses[i] - window_top;
            $(this).css('top',offset);
        });
    });
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
        },300,'linear');
        $(this).find('.entry-headline').animate({
            left:'+='+delta(this,placard,'width')+'px',
            opacity:'1.0'
        },300,'linear');
    },function() {
        var placard = $(this).find('.entry-placard');
        placard.animate({
            left:'+='+delta(this,placard,'width')+'px',
            top:'-='+delta(this,placard,'height')+'px',
            opacity:'0.0'
        },300,'linear');
         $(this).find('.entry-headline').animate({
            left:'-='+delta(this,placard,'width')+'px',
            opacity:'0.0'
        },300,'linear');
    });
}


$(document).ready(function() {
    anchor_listener();
    image_scroll();
    slide_fade();    
});


