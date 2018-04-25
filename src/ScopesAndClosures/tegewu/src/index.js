

function addButtons(num) {
  for (var i = 0; i < num; i++) {
    var $button = jQuery("<button>Button " + i + "</button>");

    $button.click(function() {
      console.log("This is button" + i);
    });

    $(document.body).append($button);
  }
}

addButtons(10);
