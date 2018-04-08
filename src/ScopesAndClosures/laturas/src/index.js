console.clear();

function addButtons(num) {
  for (var i = 0; i < num; i++) {
    var $button = $("<button>Button " + i + "</button>");

    $button.click(
      (function(i) {
        return function() {
          console.log("This is button " + i);
        };
      })(i)
    );

    $(document.body).append($button);
  }
}

addButtons(10);
