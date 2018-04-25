function getUsers(callback, limit) {
  var oReq = new XMLHttpRequest()
  oReq.addEventListener('load', function() {
    let response = JSON.parse(oReq.response)
    callback(response.slice(0, limit))
  })
  oReq.open('GET', '//jsonplaceholder.typicode.com/users')
  oReq.send()
}

describe('getUsers', () => {
  var server, callback
  beforeEach(() => {
    server = sinon.fakeServer.create()

    server.respondWith([
      200,
      {'Content-Type': 'application/json'},
      JSON.stringify([
        {name: 'user1'},
        {name: 'user2'},
        {name: 'user3'},
        {name: 'user4'},
        {name: 'user5'},
        {name: 'user6'},
        {name: 'user7'},
        {name: 'user8'},
        {name: 'user9'},
        {name: 'user10'},
        {name: 'user11'},
        {name: 'user12'}
      ])
    ])

    callback = sinon.stub()
    getUsers(callback, 5)

    server.respond()
  })

  afterEach(() => {
    server.restore()
  })

  it('should limit the ouput', () => {
    expect(callback.args[0][0].length).to.equal(5)
  })

  it('should return result of ajax response', () => {
    expect(callback.args[0][0][3].name).to.equal('user4')
  })
})

mocha.run()
