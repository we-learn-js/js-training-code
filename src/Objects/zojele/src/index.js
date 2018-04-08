console.clear()

var log = console.log

log( typeof '5' ) // "string"
log( typeof 5 ) // "number"
log( typeof false ) // "boolean"
log( typeof true ) // "boolean"
log( typeof null ) // "object"
log( typeof undefined ) // "undefined"



log(typeof [])
log(typeof {})
log(typeof document.createElement('DIV') )
log(typeof new String('5') )
log(typeof new Number(5) )
log(typeof /javascript/i)
log(typeof new RegExp("javascript", "i"))
log(typeof function (x) { return x*x } )
log(typeof new Function("x", "return x*x") )
