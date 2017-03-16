/*
    allows header bar to stick to the top
*/


$(document).ready(function(){
    $(function() {
        var nav = $('.nav');
        var navHomeY = nav.offset().top;
        var isFixed = false;
        var $w = $(document);
        $w.scroll(function() {
            var scrollTop = $w.scrollTop();
            var shouldBeFixed = scrollTop > navHomeY;
            if (shouldBeFixed && !isFixed) {
                nav.css({
                    position: 'fixed',
                    top: 0,
                    left: nav.offset().left,
                    width: nav.width()
                });
                isFixed = true;
            } else if (!shouldBeFixed && isFixed) {
                nav.css({
                    position: 'static'
                });
                isFixed = false;
            }
        });
    });
});



