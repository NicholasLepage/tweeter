$(document).ready(function() {
  console.log("I'm ready to rock and roll baby");



  $(".new-tweet textarea").keypress(function () {
    let charLeft = 140;
    let currentChar = $(this).val().length;
    let counter = $(this).parent().children(".counter");

    currentChar = charLeft - currentChar - 1;

    counter.text(currentChar);

    console.log(counter.html());

    console.log(currentChar);
  });


});