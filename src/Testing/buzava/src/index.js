describe('Array', () => {

  describe('#indexOf', () => {

    it('should return -1 when the value is not present', () => {
      expect([1, 2, 3].indexOf(5)).to.equal(-1)
      expect([1, 2, 3].indexOf(0)).to.equal(-1)
    })

    it('should return 2 when the value is on third position', () => {
      expect([1, 2, 3].indexOf(3)).to.equal(2)
    })
  })
})

describe('Array', () => {

  describe('#indexOf', () => {

    describe('When the value is not present', () => {
      it('returns -1 ', () => {
        expect([1, 2, 3].indexOf(5)).to.equal(-1)
        expect([1, 2, 3].indexOf(0)).to.equal(-1)
      })
    })

    describe('When the value is present', () => {
      it('returns its position', () => {
        expect([1, 2, 3].indexOf(3)).to.equal(2)
      })
    })
  })
})

mocha.run();

 