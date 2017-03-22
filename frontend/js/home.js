



function hover_fade() {
    var image = $('.image-git');
    image.fadeOut(1000,function() {});
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


