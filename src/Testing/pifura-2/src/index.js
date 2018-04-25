

describe("jQuery", function() {
  var fixturesElement;

  before(function() {
    fixturesElement = document.createElement("DIV");
    document.body.appendChild(fixturesElement);
  });

  after(function() {
    document.body.removeChild(fixturesElement);
  });

  describe("#append", function() {
    var button;

    beforeEach(function() {
      button = document.createElement("Button");
      button.innerHTML = "TEST APPEND BUTTON";
      button.id = "test-append-button";
      $(fixturesElement).append(button);
    });

    afterEach(function() {
      fixturesElement.removeChild(button);
    });

    it("should add element to target element", function() {
      var foundElement = document.getElementById("test-append-button");
      expect(foundElement).to.exist;
      expect(foundElement).to.equal(button);
      expect(foundElement.parentNode).to.equal(fixturesElement);
    });
  });
});

mocha.run();
