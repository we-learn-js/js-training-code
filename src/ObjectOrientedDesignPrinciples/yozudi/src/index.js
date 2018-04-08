
console.clear()


class LoginForm {
  constructor(form) {
    this.form = form
    this.messages = document.getElementById('messages')
    
    this.form
      .addEventListener('submit', this.submit.bind(this))
    document.getElementById('message-button')
      .addEventListener('click', this.closeMessage.bind(this))
    this.messages.style.display = 'none'
  }
  
  submit (event) {
    event.preventDefault()
    if(this.isFormFilledIn()) {
      this.apiLogin()
        .then( () => {
          this.showMessage('Login successfull')
          document.location.href = '#home'
        })
        .catch(() => this.showMessage('Wrong user or password'))
    }else {
      this.showMessage('Please type username and password')
    }
    
  }
  
  isFormFilledIn () {
    return !!(this.form.username.value && this.form.password.value)
  }

  showMessage (text) {
    this.messages.style.display = 'block'
    document
      .getElementById('message-text')
      .innerHTML = text
  }
  
  closeMessage () {
    this.messages.style.display = 'none'
  }
  
  apiLogin () {
    return window.fetch('//my.api.com/login')
  }
}




var loginForm = new LoginForm(document.forms[0])