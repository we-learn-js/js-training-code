console.clear()

// Collection inherits from Array
//
// sortBy(property)
// Sorts the array by given property
//
// findBy(property, value)
// Returns element that matches property = value

var Collection = function() {

  
}

var collection = new Collection()
collection.push(
  { name: 'Evan', lastName: 'Graham' },
  { name: 'Rachel', lastName: 'Green' },
  { name: 'Janice', lastName: 'Yemen' },
  { name: 'Ross', lastName: 'Green' }
)

console.log(collection.length)
// 4
console.log(collection.findBy('lastName', 'Green'))
// { lastName: "Green", name: "Rachel" }
console.log(collection.sortBy('name'))
// 0: { lastName: "Graham", name: "Evan" },
// 1: { lastName: "Yemen", name: "Janice" },
// 2: { lastName: "Green", name: "Rachel" },
// 3: { lastName: "Green", name: "Ross" }
// ...
