$(document).ready(function() {

  $('#number5').click(function() {
    $('#number5').css('color', 'yellow');
    $('#anime-5').toggleClass('image1');
  });
  $('#number4').click(function() {
    $('#number4').css('color', 'brown');
    $('#anime-4').toggleClass('image1');
  });
  $('#number3').click(function() {
    $('#number3').css('color', 'blue');
    $('#anime-3').toggleClass('image1');
  });
  $('#number2').click(function() {
    $('#number2').css('color', 'red');
    $('#anime-2').toggleClass('image1');
  });
  $('#number1').click(function() {
    $('#number1').css('color', 'green');
    $('#anime-1').toggleClass('image1');
  });
});


$('p').addClass('bigger');
console.log('added bigger');
$('p').click(function(){
  $('p').css('color', 'white');

  console.log('added white');
  $('body').toggleClass('bodyBG');
});
