function countdown(num) {
  for (let i = 0; i <= num; i += 1) {
    setTimeout(function() {
      console.log(num - i)
    }, i * 1000)
  }
}

countdown(5)
