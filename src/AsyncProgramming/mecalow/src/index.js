console.clear()

var getDelayed = function(ms, name){
  return new Promise(function(resolve){
    setTimeout(function(){
      console.log(name)
      resolve()
    }, ms)  
  })
}


Promise.series = function(promises) {
  // YOUR CODE GOES HERE
}


Promise.series([
  getDelayed(500, 'promise 1'),
  getDelayed(400, 'promise 2'),
  getDelayed(300, 'promise 3')
])


// OUTPUT:
// "promise 1"
// "promise 2"
// "promise 3"
