



var input_hover = function() {

    $('.input-list div input,textarea').each(function(index,element) {
        $(this).hover(function() {
            console.log($(this));
            $(this).animate({
                color:'black'
            });
        });
    });

}


$(document).ready(function() {
    //input_hover();
});

