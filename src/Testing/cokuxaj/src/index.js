console.clear()


describe('jQuery', () => {
  
  var fixturesElement
      
  before(() => {
    fixturesElement = document.createElement('DIV')
    document.body.appendChild(fixturesElement)
  })
  
  after(() => {
    
  })
  
  describe('#append', () =>{
    
    var button
    
    beforeEach(() => {
      button = document.createElement('Button')
      button.innerHTML = 'TEST APPEND BUTTON'
      button.id = 'test-append-button'
      $(fixturesElement).append(button)
    })
  
    afterEach(() => {

    })
    
    it('should add element to target element', () => {
      var foundElement = document.getElementById('test-append-button')
      expect(foundElement).to.exist
      expect(foundElement).to.equal(button)
      expect(foundElement.parentNode).to.equal(fixturesElement)
    })
  })
})


mocha.run()

 