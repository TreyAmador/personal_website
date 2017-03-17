/*
    object which defines parallaxing element
*/


function ParallaxElement(element,x,y) {
    this.element = element;
    this.x_init = x_init;
    this.y_init = y_init;
    this.print = function() {
        console.log(
            this.element,
            this.x_init,
            this.y_init);
    }
}


$(document).ready(function() {
    var id = 'parallax-element';
    var element = document.getElementById(id);
    var ypos;
    var yi_pos = window.pageYOffset;
    console.log(yi_pos);
    function parallax() {
        ypos = window.pageYOffset;
        element = document.getElementById(id);
        element.style.top = ypos * 0.3 + 'px';
    }
    window.addEventListener('scroll',parallax);
});


