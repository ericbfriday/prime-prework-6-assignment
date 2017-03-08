console.log('Test Sourced');

var onReady2 = function() {
  console.log('memory game doc ready');

  $('#revealHide').on('click', revealHide);
  $('.cardDiv').click(singleClickFunc);
};

// on document ready run the onReady2 function
$(document).ready(onReady2);

// revealHide function hides and shows all cards
function revealHide() {
  console.log('called revealHide');
  $('.cardImg').toggle();
}

// singleClickFunc function hides and shows an indivdual card
function singleClickFunc() {
  console.log('called singleClickFunc');
  $(this).children().toggle();
}
