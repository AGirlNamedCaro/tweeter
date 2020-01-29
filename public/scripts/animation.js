$(document).ready(function() {
  $('h5').hide();
  $('.prevTweets').mouseover(function() {
    $(this).css('box-shadow', '12px 12px 2px 1px rgba(0, 0, 255, .2)');
    $(this).css('opacity','1');
    $('h4').show();
    $('h4').css('font-weight','bold');
  })

  $('.prevTweets').mouseout(function() {
    $(this).css('box-shadow', '0px 0px 0px ')
    $(this).css('opacity','0.5');
    $('h4').hide();
  }
  
)})