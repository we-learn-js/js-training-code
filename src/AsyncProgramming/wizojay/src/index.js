function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('resolved: ' + x)
      resolve(x);
    }, 2000);
  });
}

function add1(x) {
  var a, b
  var getA = () => resolveAfter2Seconds(20).then((result) => a=result)
  var getB = () => resolveAfter2Seconds(30).then((result) => b=result)
  
  return getA()
    .then(getB)
    .then(() => x + a + b)

}

add1(10).then(v => {
  console.log(v);  // prints 60 after 4 seconds.
});