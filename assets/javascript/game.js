$(document).ready(function(){
    var randomNum = Math.floor((Math.random() * 51) + 25);
    console.log(randomNum);

    $('#random-number').text(randomNum);
})