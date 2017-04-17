/*
    loads 
*/


var demo_toggle = function() {

    $('.left-demo').hover(function() {
        $(this).animate({
            left:'-=20px'
        },300);
    }, function() {
        $(this).animate({
            left:'+=20px'
        },200);
    });

    $('.right-demo').hover(function() {
        $(this).animate({
            left:'+=20px'
        },300);
    }, function() {
        $(this).animate({
            left:'-=20px'
        },200);
    });
    
}


var toggle_video = function() {

    var video = document.getElementById('demo-video');
    var playing = false;
    $('.demo-media').click(function() {
        if (playing) {
            video.pause();
            playing = false;
        } else {
            video.play();
            playing = true;
        }
        
    });
    

}


$(document).ready(function() {
    //load_directory();
    demo_toggle();
    toggle_video();
});

