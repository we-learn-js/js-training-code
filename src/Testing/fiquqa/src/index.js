

function getUsers(callback, limit) {
  $.get("//jsonplaceholder.typicode.com/users").done(function(response) {
    callback(response.slice(0, limit));
  });
}

describe("getUsers", () => {
  beforeEach(() => {
    sinon.stub($, "get", () => {
      return {
        done(callback) {
          callback([
            { name: "user1" },
            { name: "user2" },
            { name: "user3" },
            { name: "user4" },
            { name: "user5" },
            { name: "user6" },
            { name: "user7" },
            { name: "user8" },
            { name: "user9" },
            { name: "user10" },
            { name: "user11" },
            { name: "user12" }
          ]);
        }
      };
    });
  });

  afterEach(() => {
    $.get.restore();
  });

  it("should limit the ouput", () => {
    getUsers(function(result) {
      expect(result.length).to.equal(5);
    }, 5);
  });

  it("should return result of ajax response", () => {
    getUsers(function(result) {
      expect(result[3].name).to.equal("user4");
    }, 5);
  });
});

mocha.run();
