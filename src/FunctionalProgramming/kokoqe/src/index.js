var names = ["Ben", "Jafar", "Matt"];

var printArray = function(names, console) {
  var counter;

  for (counter = 0; counter < names.length; counter++) {
    console.log(names[counter]);
  }
};

printArray(names, console); // OUTPUT: "Ben" "Jafar" "Matt"
