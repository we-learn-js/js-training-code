console.clear()

var games = {
  callOfDuty: { name: 'Call of duty' },
  uncharted: { name: 'Uncharted' },
  tombraider: { name: 'Tomb Raider' }
}

var data = {
  users: [
    { 
      name: 'Jose',
      games: [
        games.callOfDuty,
        games.uncharted
      ]
    },
    { 
      name: 'David',
      games: [
        games.tombraider,
        games.uncharted
      ]
    },
    { 
      name: 'Ismael',
      games: [
        games.uncharted
      ]
    }
  ]
}

function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

function clone(data) {
  // YOUR CODE GOES HERE
  return data; // To remove
}

clonedData = clone(data)
clonedData.users[2].name = 'Fake user name'
clonedData.users[0].games[0].name = 'Fake game name'


console.log(data.users[2].name) // "Ismael"
console.log(data.users[0].games[0].name) // "Call of duty"
// console.log(clonedData)
