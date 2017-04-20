



var input_hover = function() {

    console.log('input hover');

    $('.input-list div input,textarea').each(function(index,element) {
        $(this).hover(function() {
            console.log($(this));
            $(this).animate({
                //backgroundColor:'##ccaa99'
                color:'black'
            });
        });
    });

}


$(document).ready(function() {
    //input_hover();
});

