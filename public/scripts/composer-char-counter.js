// Makes sure the HTML is fully loaded before doing anything
$(document).ready(function() {

  // Registers how many characters are left after having fully pressed a key
  $(".new-tweet textarea").keyup(function (event) {
    let charLeft = 140;
    let currentChar = $(this).val().length;
    let counter = $(this).parent().children(".counter");

    currentChar = charLeft - currentChar;

    counter.text(currentChar);

    // Inline CSS changes to visually represent the fact that the character limit has been exceeded.
    if (counter.text() < 0) {
      counter.css({"color": "red"});
    } else {
      counter.css({"color": "black"});
    }
  });
});