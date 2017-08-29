/* Millie/Dev (whoever ends up grading this). Please note that I
   didn't get this specific exercise done by Sunday. I'd still
   appreciate feedback on the code if possible, but I wanted you
   to know I missed the deadline on memory-game for grading reasons.
   */

console.log('Test Sourced');

var onReady2 = function() {
  console.log('memory game doc ready');

  //TODO Add your code below to attach your event listeners to functions
  $('.cardDiv').on('click', singleClickFunc);
  $('#revealHide').on('click', revealHide);
};

// on document ready run the onReady2 function
$(document).ready(onReady2);

// revealHide function hides and shows all cards
function revealHide() {
  //TODO add your code here to get the desired functionality
  //This doesn't work --> $('.cardImg').toggle();
if ($('.cardImg').is(":visible")) {
  $('.cardImg').hide();
}
  else {
    $('.cardImg').toggle();
  }

  console.log('Running revealHide()')
}

// singleClickFunc function hides and shows an indivdual card
function singleClickFunc() {
  //TODO add your code here to get the desired functionality
  $('.cardImg', this).toggle();
  console.log('Running singleClickFunc()')
}
