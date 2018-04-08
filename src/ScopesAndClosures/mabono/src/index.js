function countdown(num) {
  for (var i = 0; i <= num; i += 1) {
    (function(i) {
      setTimeout(function() {
        console.log(num - i);
      }, i * 1000);
    })(i);
  }
}

countdown(5);
