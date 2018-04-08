console.clear()

var arr = [0,1,2,3,5]

Object.prototype.getName = function() { 
   var funcNameRegex = /function (.{1,})\(/;
   var results = (funcNameRegex).exec((this).constructor.toString());
   return (results && results.length > 1) ? results[1] : "";
};


function getObjectProperty(obj, propName) {
  var chain = 'obj.'
  console.log('------------------------------')
  console.log( 'Accessing (' +obj + ').' + propName )
  if (obj.hasOwnProperty(propName)) {
    
    console.log(chain+=propName + '=' + obj[propName])
    return obj[propName]
  } else {
    let prototype = obj.__proto__

    while(prototype){
      chain += '__proto__.'
      if (prototype.hasOwnProperty(propName)) {
        console.log(chain+=propName + '=' + obj[propName])
        return prototype[propName]
      } else {
        prototype = prototype.__proto__
      }
    }
    return undefined
  }
}

function User(name) {
  this.name = name
}
User.prototype.sayName = function(item) {
  console.log('My name is ' + this.name )
}
User.prototype.orderItem = function(item) {
  console.log(item + ' purchased: delivery in 3 days' )
}


function PremiumUser (name) {
  this.name = name
}

PremiumUser.prototype = new User()

PremiumUser.prototype.orderItem = function(item) {
  console.log(item + ' purchased: delivery in 1 day' )
}

var user2 = new PremiumUser('Evan');

getObjectProperty(user2, 'name')
getObjectProperty(user2, 'sayName')
getObjectProperty(user2, 'orderItem')

