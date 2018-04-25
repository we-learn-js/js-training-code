

console.log("###### case 1 #####");
Promise.resolve(1)
  .then(x => console.log("then 1.0"))
  .then(x => console.log("then 1.1"));

console.log("###### case 2 #####");
Promise.resolve(1)
  .then(x => console.log("then 2.0"))
  .then(x => console.log("then 2.1"));

// OUTPUT
// "###### case 1 #####"
// "###### case 2 #####"
// "then 1.0"
// "then 2.0"
// "then 1.1"
// "then 2.1"
