



function loadMeta() {
    $('head').load('../views/meta.html');
}


function loadHeader() {
    $('.navbar-insert').load('../views/header.html');
}


$(document).ready(function() {
    loadHeader();
});

