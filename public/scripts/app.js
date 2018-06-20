//jshint esversion: 6
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
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
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

$(function() {

function renderTweets(tweets) {
  // loops through tweets
  for (let i in tweets) {
    let $tweet = createTweetElement(tweets[i]);
    $('.tweets-container').append($tweet);
  }
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
}

const createTweetElement = function(data) {

  // Grab name
  const name = data.user.name;
  const $name = $(`<p id="username">${name}</p>`);
  // Grab small avatar
  const avatar = data.user.avatars.small;
  const $avatar = $(`<img class="image" src=${avatar}>`);
  // Grab handle
  const handle = data.user.handle;
  const $handle = $(`<p id="handlebar">${handle}</p>`);
  // Grab text content
  const content = data.content.text;
  const $content = $(`<p class="text">${content}</p>`);
  // Grab created_at
  const time = data.created_at;
  const $time = $(`<p class="text">${time}</p>`);




  const $article = $('<article>')
                      .addClass('individual-tweet');


  const $header = $('<header>')
                      .append($avatar)
                      .append($name)
                      .append($handle)
                      .appendTo($article);

  const $div = $('<div>')
                  .append($content)
                  .appendTo($article);

  const $footer = $('<footer>')
                    .addClass('footer')
                    .append($time)
                    .appendTo($article);



  return $article;
};

renderTweets(data);
});

