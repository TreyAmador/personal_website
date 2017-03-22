



/*
function add_hover_fade(addEvent) {

    var image = $('.entry-overlay');
    function hover_fade_out() {
        
        image.fadeOut(1000,function() {});
    }
    addEvent(image,'mouseover',hover_fade_out);
    //window.addEventListener()
    //'mouseenter';
    //'mouseover';
}
*/


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
    //add_hover_fade(addEvent);
    
    
    //var image = $('.entry-overlay');
    //image.fadeOut(1000,function() {});
   
    //addEvent(window,'load',function() {
    //    var image = $('.entry-overlay');
    //    image.fadeOut(1000,function() {});
    //});

    //add_hover_fade(addEvent);


    var overlays = document.getElementsByClassName('entry-overlay');
    var remind = function() {
        console.log('reeeeeeee');
    }
    for (var i = 0; i < overlays.length; ++i) {
        overlays[i].addEventListener('click',remind,false);
    }

    
    
});





