/**
 * modify size of images
 */



$(document).ready(function() {
    var expected_height = 104;
    var logo_height = $('.logo img').height();
    if (logo_height < expected_height) {
        var margin = (expected_height-logo_height)/2;
        $('.logo img').css('margin-top',margin);
    }
});


