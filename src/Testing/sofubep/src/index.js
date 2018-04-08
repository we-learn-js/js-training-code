console.clear()

function countdown (num) {
    for (var i = 0; i <= num; i += 1) {
        setTimeout(((i) => {
            return () => { console.log(num - i) }
        })(i), i * 1000);
    }
}


describe('countdown', () =>{
  var clock
  beforeEach(() =>{
    clock = sinon.useFakeTimers()
    sinon.spy(console, 'log')
    countdown(5)
  })
  
  afterEach(() =>{
    clock.restore();
    console.log.restore()
  })
   
  it( 'should log numbers step by step', () => {
    clock.tick(500)
    expect(console.log).to.have.been.calledOnce
    clock.tick(1000)
    expect(console.log).to.have.been.calledTwice
  })
  
  it( 'should stop after countdown timeout', () => {
    clock.tick(10000)
    expect(console.log.callCount).to.equal(6)
  })

})

mocha.run()