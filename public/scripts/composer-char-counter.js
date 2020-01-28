//This ensures that the DOM has loaded

$(document).ready(function() {
  // let counter = 0;
  const maxLength = 140;

  $('textarea').keyup(function() {
    let currentChars = maxLength - $(this).val().length;
    $('.counter').text(currentChars);
    if($(this).val().length > maxLength) {
      $('.counter').text(currentChars).css('color','red');
    }
    else {
      $('.counter').text(currentChars).css('color','black');
    }

  })
  
})
