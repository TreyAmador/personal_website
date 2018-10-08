/**
 *  a page to allow snow particles!
 */


var POOL_HTML = '.effect-pool';
var INTERVAL_TIME = 50;


function display_page() {
    $('body').fadeIn('slow', function() {
        // aftereffect
    });
}


function init_var(x, y) {
    return Math.round(Math.random()*x + y);
}


function init_color() {
    var colors = [
        '#cfe0e8', '#b7d7e8', '#87bdd8', '#daebe8', 
        '#fbefcc', '#f9ccac', '#f4a688', '#e0876a'
    ];
    var index = Math.floor((Math.random()*1000) % colors.length);
    return colors[index];
}


function below_frame(height, y_pos) {
    return (y_pos-height) > window.innerHeight;
}


function Particles(Particle, plen=20) {
    this.particles = new Array(plen);
    for (var i = 0; i < plen; ++i) {
        this.particles[i] = new Particle();
    }
}


Particles.prototype.draw = function() {
    var ptc_html = '<div class="particle"></div>';
    $(POOL_HTML).empty();
    this.particles.forEach(function(ptc) {
        $(POOL_HTML).append(ptc_html);
        $('.particle').last().css({
            'position': 'absolute',
            'left': ptc.x+'px',
            'top': ptc.y+'px',
            'width': ptc.dim+'px',
            'height': ptc.dim+'px',
            'background-color': ptc.color,
            'overflow': 'hidden',
            'z-index': '1'
        });
    });
}


Particles.prototype.update = function(update_time) {
    this.particles.forEach(function(ptc) {
        ptc.update(update_time);
    });
}


function SnowParticle() {
    this.x = init_var(window.innerWidth, 0);
    this.y = init_var(window.innerHeight, 1.2*(-window.innerHeight));
    this.vx = init_var(Math.PI, Math.PI/2)
    this.vy = init_var(1000, 0);
    this.dim = init_var(10, 10);
    this.color = init_color();
}


SnowParticle.prototype.update = function(update_time) {
    this.x += this.vx*Math.sin(update_time+this.vy);
    this.y += 1;
    if (below_frame(this.dim, this.y)) {
        this.x = init_var(window.innerWidth, 0);
        this.y = -this.dim;
    }
}


function get_time() {
    return new Date().getMilliseconds();
}


function get_interval(init_time) {
    return get_time() - init_time;
}


function snowing() {
    var particles = new Particles(SnowParticle),
        init_time = get_time();
    setInterval(function() {
        var update_time = get_interval(init_time);
        particles.update(update_time);
        particles.draw();
    }, INTERVAL_TIME);
}


function wind() {

    var init_time = get_time();
    setInterval(function() {

        

    }, INTERVAL_TIME);

}


$(window).ready(function() {
    snowing();
    display_page();
});

