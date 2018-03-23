



function loadHeader() {
    console.log('hey!');
    $('.navbar-insert').load('../views/header.html');
    console.log('yo!');   
}



$(document).ready(function() {
    loadHeader();
});

