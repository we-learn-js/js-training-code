var Button = function(content) {
  this.content = content
  this.element = document.createElement('BUTTON')
  this.element.innerHTML = content
  this.element.addEventListener('click', this.click)

  document.body.appendChild(this.element)
}

Button.prototype.click = function() {
  console.log(this.content + ' clicked')
}

var button1 = new Button('Button 1')
var button2 = new Button('Button 2')
