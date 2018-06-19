$(document).ready(function() {
  console.log("I'm ready to rock and roll baby");



  $(".new-tweet textarea").keyup(function (event) {
    let charLeft = 140;
    let currentChar = $(this).val().length;
    let counter = $(this).parent().children(".counter");

    currentChar = charLeft - currentChar;

    counter.text(currentChar);

    if (counter.text() < 0) {
      counter.css({"color": "red"});
    } else {
      counter.css({"color": "black"});
    }

  });


});