console.clear()

function upper(text) {
  return text.toUpperCase()
}

function firstChar(text) {
  return Promise.resolve(text[0])
}

function getCharCode(text) {
  return function() {
    return Promise.resolve(text.charCodeAt(0))
  }
}

getFirstCharNumber('abcde').then( console.log ) 
// OUTPUT: 65

function getFirstCharNumber(text) {
  // YOUR CODE GOES HERE
}

