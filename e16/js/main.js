$(document).ready(function() {

  $('#number5').click(function() {
    $('#number5').css('color', 'white');
    $('#bird-5').toggleClass('black');
  });
  $('#number4').click(function() {
    $('#number4').css('color', 'navy');
    $('#bird-5').toggleClass('black');
  });
  $('#number3').click(function() {
    $('#number3').css('color', 'brown');
    $('#bird-3').toggleClass('black');
  });
  $('#number2').click(function() {
    $('#number2').css('color', 'orchid');
    $('#bird-2').toggleClass('black');
  });
  $('#number1').click(function() {
    $('#number1').css('color', 'olivedrab');
    $('#bird-1').toggleClass('black');
  });
});


$('p').addClass('bigger');
console.log('added bigger');
$('p').click(function(){
  $('p').css('color', 'white');

  console.log('added white');
  $('body').toggleClass('bodyBG');
});
