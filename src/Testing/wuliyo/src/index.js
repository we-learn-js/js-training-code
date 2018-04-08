console.clear();

function getOneUser() {
  return new Promise(function(resolve) {
    $.get("//jsonplaceholder.typicode.com/users/").done(users =>
      resolve(users[0])
    );
  });
}

describe("getOneUser", () => {
  it("should filter number of return results", done => {
    getOneUser(5).then(function(result) {
      expect(result).to.be.an("object");
      expect(result.id).to.equal(1);
      done();
    });
  });
});

mocha.run();
