var arr = [0, 1, 2, 3, 5]

Object.prototype.getName = function() {
  var funcNameRegex = /function (.{1,})\(/
  var results = funcNameRegex.exec(this.constructor.toString())
  return results && results.length > 1 ? results[1] : ''
}

function getObjectProperty(obj, propName) {
  var chain = 'obj.'
  console.log('------------------------------')
  console.log('Accessing (' + obj + ').' + propName)
  if (obj.hasOwnProperty(propName)) {
    console.log('200 - Found in instance')
    console.log((chain += propName + '=' + obj[propName]))
    return obj[propName]
  } else {
    console.log('KO - Not found in instance')
    let prototype = obj.__proto__

    while (prototype) {
      chain += '__proto__.'
      if (prototype.hasOwnProperty(propName)) {
        console.log('OK - Found in prototype of ' + prototype.getName())
        console.log((chain += propName + '=' + obj[propName]))
        return prototype[propName]
      } else {
        console.log('KO - Not found in prototype of ' + prototype.getName())
        prototype = prototype.__proto__
      }
    }
    return undefined
  }
}

function caseUndefined() {
  console.log(getObjectProperty(arr, 'myVar'))
}

function caseObject() {
  Object.prototype.myVar = 1
  console.log(getObjectProperty(arr, 'myVar'))
}

function caseArray() {
  Array.prototype.myVar = 2
  console.log(getObjectProperty(arr, 'myVar'))
}

function caseInstance() {
  arr.myVar = 3
  console.log(getObjectProperty(arr, 'myVar'))
}

//caseUndefined()
caseObject()
//caseArray()
//caseInstance()
//console.log(getObjectProperty([], 'toString'))
//console.log(getObjectProperty([], 'hasOwnProperty'))
//console.log(getObjectProperty('', 'hasOwnProperty'))
