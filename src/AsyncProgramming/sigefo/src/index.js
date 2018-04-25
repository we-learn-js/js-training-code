

var promise = Promise.resolve(1); // Promise

promise
  .then(x => {
    return x + 1;
  })
  .then(x => {
    return x + 1;
  });

var promise2 = promise.then(x => {
  return x + 1;
});
var promise3 = promise2
  .then(x => {
    throw new Error("Error");
  })
  .catch(x => {
    return x;
  });

promise.then(console.log);
promise2.then(console.log);
promise3.then(console.log);
