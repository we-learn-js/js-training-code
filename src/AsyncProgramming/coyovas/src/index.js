function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('resolved: ' + x)
      resolve(x)
    }, 2000)
  })
}

async function add2(x) {
  var a = resolveAfter2Seconds(20)
  var b = resolveAfter2Seconds(30)
  var ab = (await a) + (await b)
  return x + ab
}

add2(10).then(v => {
  console.log(v) // prints 60 after 2 seconds.
})
