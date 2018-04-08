describe('Array', function () {

  describe('#push', function () {

    it('should add given element to the end of an array', function () {
      const arr = [1,2,3]
      arr.push(5)
      expect(arr[arr.length-1]).to.equal(5)
    })
    
    it('should add more elements when several elements are passed as param', function () {
      const arr = [1,2,3]
      arr.push(5, 6, 7)
      expect(arr.slice(3)).to.deep.equal([ 5, 6, 7 ])
    })

    it('should return the new length of the array', function () {
      const arr = [1,2,3]
      
      expect(arr.push(5, 6, 7)).to.equal(6)
    })
  })
})

mocha.run();

 