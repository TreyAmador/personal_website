



function hover_fade() {

    //var image = $('.image-git');
    //image.fadeOut(1000,function() {});

    //var image = $('.entry-git');
    //image.animate({left:'500px'});
    
    
    $('.entry-git').hover(function() {
        $(this).fadeOut(1000,function(){});
    });



    //$('.image-git').mouseover(function() {
    //    $(this).fadeOut(1000,function() {});
    //    //console.log('entering');
    //});

    
    


}



var addEvent = function(object,type,callback) {
    if (object == null || typeof(object) == 'undefined')
        return;
    if (object.addEventListener)
        object.addEventListener(type,callback,false);
    else if (object.attachEvent)
        object.attachEvent('on'+type, callback);
    else
        object['on'+type] = callback;
}


$(document).ready(function() {
    addEvent(window,'load',hover_fade);
});


