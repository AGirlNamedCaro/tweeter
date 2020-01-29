//This file grabs the character count from the textarea input and 
//displays the available characters left back in the html file.


$(document).ready(function() {
  
  const maxLength = 140;

  $('textarea').keyup(function() {
    let currentChars = maxLength - $(this).val().length;
    $('.counter').text(currentChars);
    if($(this).val().length > maxLength) {
      $('.counter').text(currentChars).css('color','red');
      alert('This message exceeds the maximum length allowed');
      
    }
    
    else {
      $('.counter').text(currentChars).css('color','black');
    }

  })
  
})
