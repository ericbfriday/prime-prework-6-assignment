describe('memory game test', function() {
  beforeEach(function () {
    fixture.setBase('assignment/3_memory-game');
    fixture.load('index.html');
  });

  afterEach(function () {
    fixture.cleanup();
  });

  describe('revealHide()', function() {

    it('should show and hide when revealHide is called', function() {
      //revealHide has not been called
      // validate that all elements with the cardImg class are visible
      validateShown();

      // revealHide function is called
      revealHide();
      // validate that all elements with the cardImg class are not visible
      validateHidden();

      //revealHide is called again
      revealHide();
      // validate that all elements with the cardImg class are visible
      validateShown();
    });
  });

  describe('singleClickFunc()', function() {
    it('should hide card image when that image\'s card is clicked', function() {
      //ensure document is ready before test runs
      onReady2();

      // get first card element and trigger click event on it
      $('.cardDiv').first().triggerHandler('click');
      assert.equal($('.cardImg').first().is(':visible'), false, 'element should not be visible');
    });

    it('should show card image when that image\'s card is clicked', function() {
      //ensure document is ready before test runs
      onReady2();

      //call revealHide to hide all cards and validate they are hidden
      revealHide();
      validateHidden();

      // get first card element and trigger click event on it
      $('.cardDiv').first().triggerHandler('click');
      assert.equal($('.cardImg').first().is(':visible'), true, 'element should be visible');
    });
  });
});

// -- Test util functions --
// function that iterates over cardImg elements and validates they are displayed
function validateShown(){
  $('.cardImg').each(function(index, el) {
    assert.equal($(el).is(':visible'), true, 'element should be visible');
  });
}

// function that iterates over cardImg elements and validates they are not displayed
function validateHidden() {
  $('.cardImg').each(function(index, el) {
    assert.equal($(el).is(':visible'), false, 'element should not be visible');
  });
}
