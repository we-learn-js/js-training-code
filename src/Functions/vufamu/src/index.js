console.clear();

window.addEventListener("load", function(event) {
  throw new Error("Anonymous Error");
});

window.addEventListener("load", function onLoad(event) {
  throw new Error("Error with name");
});
