var Collection = function() {}

Collection.prototype = new Array()

Collection.prototype.sortBy = function(property) {
  return this.sort(function(obj1, obj2) {
    return obj1[property] > obj2[property]
  })
}
Collection.prototype.findBy = function(prop, value) {
  var result
  this.forEach(function(obj) {
    result = result || (obj[prop] === value ? obj : undefined)
  })
  return result
}

var collection = new Collection()
collection.push(
  {name: 'Evan', lastName: 'Graham'},
  {name: 'Rachel', lastName: 'Green'},
  {name: 'Janice', lastName: 'Yemen'},
  {name: 'Ross', lastName: 'Green'}
)

console.log(collection.length)
// 4
console.log(collection.findBy('lastName', 'Green'))
// [object Object] { lastName: "Green", name: "Rachel" }
console.log(collection.sortBy('name'))
// 0: [object Object] { lastName: "Graham", name: "Evan" },
// 1: [object Object] { lastName: "Yemen", name: "Janice" },
// 2: [object Object] { lastName: "Green", name: "Rachel" },
// 3: [object Object] { lastName: "Green", name: "Ross" }
// ...
