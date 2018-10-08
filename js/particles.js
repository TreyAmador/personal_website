/**
 *  a page to allow snow particles!
 */


function display_page() {
    $('body').fadeIn('slow', function() {
        // aftereffect
    });
}


function Particle() {
    this.x = Math.round(Math.random()*window.innerWidth);
    this.y = Math.round(Math.random()*window.innerHeight);
    this.dim = Math.round(Math.random()*10+10);
    this.color = '#cfecec';
}


function init_particles() {
    var plen = 50;
    var particles = new Array(plen);
    for (var i = 0; i < plen; ++i) {
        particles[i] = new Particle();
    }
    return particles;
}


function update_particles(particles, update_time) {
    particles.forEach(function(ptc) {
        ptc.x += 2*Math.PI*Math.sin(update_time);
        ptc.y += 1;
    });
}


function draw_particles(particles) {
    $('.effect-pool').empty();
    particles.forEach(function(ptc) {
        $('.effect-pool').append('<div class="particle"></div>');
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
    var init_time = get_time();
    var particles = init_particles();
    setInterval(function() {
        var update_time = get_interval(init_time);
        update_particles(particles, update_time);
        draw_particles(particles);
    }, 100);
}


$(window).ready(function() {
    snowing();
    display_page();
});

