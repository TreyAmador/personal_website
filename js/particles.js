/**
 *  a page to allow snow particles!
 */


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


function Particle() {
    this.x = init_var(window.innerWidth, 0);
    this.y = init_var(window.innerHeight, 1.2*(-window.innerHeight));
    this.vx = init_var(Math.PI, Math.PI/2)
    this.vy = init_var(1000, 0);
    this.dim = init_var(10, 10);
    this.color = init_color();
}


function init_particles() {
    var plen = 20;
    var particles = new Array(plen);
    for (var i = 0; i < plen; ++i) {
        particles[i] = new Particle();
    }
    return particles;
}


function update_particles(particles, update_time) {
    particles.forEach(function(ptc) {
        // ptc.x += Math.PI*Math.sin(update_time+ptc.vy);
        ptc.x += ptc.vx*Math.sin(update_time+ptc.vy)
        ptc.y += 1;
        if (ptc.y > window.outerHeight + ptc.dim) {
            ptc.x = init_var(window.innerWidth, 0);
            ptc.y = -ptc.dim;
        }
    });
}


function draw_particles(particles) {
    var ptc_html = '<div class="particle"></div>',
        pool_html = '.effect-pool';
    $(pool_html).empty();
    particles.forEach(function(ptc) {
        $(pool_html).append(ptc_html);
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


function get_time() {
    return new Date().getMilliseconds();
}


function get_interval(init_time) {
    return get_time() - init_time;
}


function snowing() {
    var init_time = get_time(),
        interval_time = 50;
    var particles = init_particles();
    setInterval(function() {
        var update_time = get_interval(init_time);
        update_particles(particles, update_time);
        draw_particles(particles);
    }, interval_time);
}


$(window).ready(function() {
    snowing();
    display_page();
});

