/////THIS FUNCTION ITERATES THROUGH THE TWEET OBJECTS AND RENDERS THEM TO THE HTML ///////

const renderTweets = (tweets) => {
  // loops through tweets
  // calls createTweetElement for each tweet
  const $tweetContainer = $('.tweetContainer');
  $tweetContainer.empty();
  
  for (const tweet of tweets) {
    $tweetContainer.prepend(createTweetElement(tweet)); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  }
  // takes return value and appends it to the tweets container
};


////THIS FUNCTION CREATES A MARKUP TEMPLATE FOR THE TWEET OBJECT/////////

const createTweetElement = (tweet) => {

  let $tweet = $(`<article class='prevTweets'>
             <header id='prev-tweets-header'>  
               <div class='leftElementsContainer'>
                 <img class='profileImg' src=${escape(tweet.user.avatars)}>
                 <p class='nameTweet'>${escape(tweet.user.name)}</p>
   
               </div>
   
                 <h4 class='handle'>${escape(tweet.user.handle)}</h4>
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
};
   