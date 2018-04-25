// This is a simplified implementation of `require`
var require = function(func) {
  var exports = {},
    module = {exports: exports}
  func(module, exports)
  return module.exports
}

var month = require(function(module, exports) {
  // YOUR CODE GOES HERE
})

console.log(month.name(2)) // March
console.log(month.number('November')) // 10
