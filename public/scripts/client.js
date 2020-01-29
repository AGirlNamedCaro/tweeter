$(document).ready(function (){


/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
// loops through tweets
// calls createTweetElement for each tweet

for(const tweet of tweets) {
  $('.container').append(createTweetElement(tweet)); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
}
// takes return value and appends it to the tweets container
}

//This loop takes in an object and is responsible for returning a tweet article
//that contains the entire HTML structure of the tweet
const createTweetElement = function(tweet) {

const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const firstDate = new Date(tweet.created_at);
const secondDate = new Date();

const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
 let $tweet = $(`<article class='prevTweets'>
          <header id='prev-tweets-header'>  
            <div class='leftElementsContainer'>
              <img class='profileImg' src=${tweet.user.avatars}>
              <p class='nameTweet'>${tweet.user.name}</p>

            </div>

              <h4>${tweet.user.handle}</h4>
          </header>
          <div class='tweetBody'>
            <p>${tweet.content.text}</p>
          </div>
          <footer>
            <p id='timeLength'>${diffDays} days ago</p>
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

renderTweets(data);


// This prevents the default action of reloading the page by the form submission
$('form').submit(function(event) {
  event.preventDefault();
  console.log('preventing default behaviour');
  const serializedData =  $(this).serialize();
  console.log('serialized data', serializedData);
  $.ajax('/tweets', {method: 'POST', data: serializedData})
    .then(function(serializedData) {
      console.log('Success: ', serializedData);
      
    })
})

});