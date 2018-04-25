

function getUsers(callback, limit) {
  $.get("//jsonplaceholder.typicode.com/users").done(response => {
    callback(response.slice(0, limit));
  });
}

describe("getUsers", () => {
  beforeEach(() => {
    sinon.spy($, "get");
    getUsers(() => {}, 5);
  });

  afterEach(() => {
    $.get.restore();
  });

  it("should make right ajax request to retrieve users", () => {
    expect($.get).to.have.been.calledOnce;
    expect($.get.firstCall.args[0]).to.contain("/users");
  });
});

mocha.run();
