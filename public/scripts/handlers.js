//This file handles the POST and GET requests 

///////// POST REQUEST ///////////////
const postTweets = () => {
  $('form').submit(function(event) {
  event.preventDefault();
  const serializedData =  $(this).serialize();
  
//Here we are checking form validation
  if(String($(this).find('textarea').val()).length === 0) {

    $('#noChars').slideToggle();

  }
  
     else if (String($(this).find('textarea').val()).length <= 140) {
      $.ajax('/tweets', {method: 'POST', data: `${serializedData}`})
      .then(function() {
        loadTweets();
      })
      
    } 
    else {

        $('#above140').slideToggle();

      };
      
      
    }
  
  )
}


////GET REQUEST /////////////////
const loadTweets = () => {
  $.ajax('/tweets', {method: 'GET'})
  .then(function(data){
    console.log('fetched data: ', data);
    renderTweets(data);
  }) 
  
}