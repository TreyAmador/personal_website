// scrolls image in background



$(document).ready(function() {
    
    var prlx = $('.parallax-window');
    var rate = prlx.attr('data-rate');
    rate = !isNaN(rate) ? rate : 0;
    // this could be removed
    rate = 0.7;
    var init_pos = prlx.offset();
    
    function parallax() {

        var curr_pos = init_pos;
        var scroll = $(document).scrollTop();
        curr_pos.top = (scroll - init_pos.top)*rate;
        prlx.offset(curr_pos);



        /*
        var curr_scroll = $(document).scrollTop();
        var scroll_offset = curr_scroll - prev_scroll;
        var position = prlx.offset();
        position.top += scroll_offset*rate;
        prlx.offset(position);
        prev_scroll = curr_scroll;
        */
    }
    
    document.onscroll = parallax;

});



/*
var velocity = 0.5;

function update() {
    var y = $(window).scrollTop();
    $('.container').each(function(){
        var $element = $(this);
        var height = $element.height()-18;
        $(this).css('backgroundPosition','50%',Math.round((height-pos)*velocity)+'px');
    });
}

$(window).bind('scroll',update);
*/

