Promise.delay = function(ms) {
  // YOUR CODE GOES HERE
}

Promise.delay(1000).then(function() {
  console.log('delayed 1000ms')
})

setTimeout(function() {
  console.log('delayed 500ms')
}, 500)

// OUTPUT
// "delayed 500ms"
// "delayed 1000ms"
