/*
    modifies the index (header and side bars)
    raises headers, loads page, lowers headers back
*/


var Vec2D = function(pnt,dim,name) {
    this.point = pnt;
    this.dimension = dim;
    this.name = name;
}


var load_page = function() {
    $('body').fadeIn(500);
}


var hoist_headers = function() {
    var navhead = '.navbar-header',
        sidehead = '.sidebar-header';
    var nav = new Vec2D(
        parseInt($(navhead).css('top'),10),
        parseInt($(navhead).css('height'),10),
        navhead);
    var side = new Vec2D(
        parseInt($(sidehead).css('left'),10),
        parseInt($(sidehead).css('width'),10),
        sidehead);
    $(nav.name).css('top',nav.point-nav.dimension);
    $(side.name).css('left',side.point-side.dimension);
    return [nav,side];
}


var lower_header = function(headers) {
    var navbar = headers[0],
        sidebar = headers[1];
    $(navbar.name).animate({
        top:'+='+navbar.dimension+'px'
    });
    $(sidebar.name).animate({
        left:'+='+sidebar.dimension+'px'
    });
}


$(document).ready(function() {
    var headers = hoist_headers();
    load_page();
    lower_header(headers);
});


