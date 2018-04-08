
console.clear()

var form = document.getElementById('my-form')

console.log(form.color.value) // ["Green", "Blue", "Black"]
form.color.value = ["Red", "White"]
console.log(form.color.value) // ["Red", "White"]
