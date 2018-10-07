/**
 *  a page to allow snow particles!
 */


function display_page() {
    $('body').fadeIn('slow', function() {});
}


function snowing() {

    var particles = []
    
    $('.effect-hook').append(particles);

}


$(window).ready(function() {
    snowing();
    display_page();
});


