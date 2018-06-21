//jshint esversion: 6
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(function() {

const $button = $('#nav-bar button');

$button.on('click', function () {
  $('.container .new-tweet').slideToggle(250);
  $("[name='text']").focus();
});

function loadTweets() {
  $.ajax({
    method: 'GET',
    url: '/tweets',
    success: function(data) {
      renderTweets(data);
    }

  });

}

function renderTweets(tweets) {
  // loops through tweets
  $('.tweets-container').empty();

  for (let i in tweets) {
    let $tweet = createTweetElement(tweets[i]);
    $('.tweets-container').prepend($tweet);
  }
}

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
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
  const $content = $(`<p class="text">${escape(content)}</p>`);
  // Grab created_at
  const time = data.created_at;
  const $time = $(`<p class="text">${time}</p>`);

  // Create the icons
  const $flag = $('<i class="material-icons">flag</i>');
  const $share = $('<i class="material-icons">share</i>');
  const $favorite = $('<i class="material-icons">favorite</i>');




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
                    .append($flag)
                    .append($share)
                    .append($favorite)
                    .appendTo($article);



  return $article;
};

loadTweets();

const $submit = $('.new-tweet-form input:submit');

  $submit.on('click', function (event) {
    event.preventDefault();

    //Variable for making sure the value is valid for our website
    const $tweetTest = $("[name='text']").val();
    const $tweetContent = $("[name='text']").serialize();

    if ($tweetTest === "") {
      let $emptyTweet = $('<p class="errorMessage">You\'re not humming about anything! Your tweet is empty.</p>');
      $('.container').prepend($emptyTweet);
      $emptyTweet.fadeOut(5000);
    } else if ($tweetTest.length > 140) {
        let $longTweet = $('<p class="errorMessage">That hum is way too long!</p>');
        $('.container').prepend($longTweet);
        $longTweet.fadeOut(5000);
    } else {


      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: $tweetContent,
        success: function() {

          loadTweets();

          $("[name='text']").val('');
          $('.counter').text(140);

        }

      });

    }

  });


});