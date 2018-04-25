// compact()
// Creates an array with all falsey values removed.
// The values false, null, 0, "", undefined, and NaN are falsey.
//
// first()
// Gets the first element of array.
//
// last()
// Gets the last element of array.
//
// remove(func)
// Changes the content of an array by removing elements that return true
// on given function.

var arr = [1, '', 8, null, 'Evan', true, false]

console.log(arr.compact()) // [1, 8, "Evan", true]
console.log(arr.first()) // 1
console.log(arr.last()) // false

arr.remove(x => typeof x === 'string')
console.log(arr) // [1, 8, null, true, false]
