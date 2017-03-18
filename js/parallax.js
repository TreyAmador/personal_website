/*
    object which defines parallaxing element
*/


function ParallaxElement(id) {
    this.element = document.getElementById(id);
    this.y_init = element.style.top;
    this.print = function() {
        console.log(this.element,this.y_init);
    }
}


$(document).ready(function() {
    var element = '#parallax-element';
    var prlx = $(element);
    const y_init = parseInt(prlx.css('top'),10);
    console.log(y_init);
    function parallax() {
        prlx = $(element);
        var y_offset = window.pageYOffset;
        var y_pos = y_init+(-0.3*(y_offset))+'px';
        prlx.css('top',y_pos);
    }
    window.onscroll = parallax;
});



