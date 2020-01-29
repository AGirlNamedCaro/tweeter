$(document).ready(function (){


/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json


const renderTweets = (tweets) => {
// loops through tweets
// calls createTweetElement for each tweet

for(const tweet of tweets) {
  $('.tweetContainer').prepend(createTweetElement(tweet)); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
}
// takes return value and appends it to the tweets container
}

//This loop takes in an object and is responsible for returning a tweet article
//that contains the entire HTML structure of the tweet
const createTweetElement = (tweet) => {

 let $tweet = $(`<article class='prevTweets'>
          <header id='prev-tweets-header'>  
            <div class='leftElementsContainer'>
              <img class='profileImg' src=${escape(tweet.user.avatars)}>
              <p class='nameTweet'>${escape(tweet.user.name)}</p>

            </div>

              <h4>${escape(tweet.user.handle)}</h4>
          </header>
          <div class='tweetBody'>
            <p>${escape(tweet.content.text)}</p>
          </div>
          <footer>
            <p id='timeLength'>${escape(date(tweet.created_at))} days ago</p>
            <div class='icons'>
              <i class="fa fa-flag"></i>
              <i class="fa fa-retweet"></i>
              <i class="fa fa-heart"></i>
            </div>
          </footer>
        </article>
 `).addClass('tweet');
 
return $tweet;
}



// This prevents the default action of reloading the page by the form submission
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
  
  
  //This function is responsible for fetching tweets from the localhost/tweets page
  const loadTweets = () => {
    $.ajax('/tweets', {method: 'GET'})
    .then(function(data){
      console.log('fetched data: ', data);
      renderTweets(data);
    }) 
    
}

loadTweets();



});