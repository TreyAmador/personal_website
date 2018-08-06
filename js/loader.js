


function loadHeader() {
    var header_bar = $('#top-header').html();
    $('#header-include').append(header_bar);
}



$(window).on('load', function(evnt) {
    loadHeader();
});
