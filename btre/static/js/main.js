const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

//after 3 second it disappear
setTimeout(function () {
    $('#message').fadeOut('slow');

}, 3000);
