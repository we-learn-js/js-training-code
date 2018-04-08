console.clear();

describe("Array", () => {
  before(() => {
    // runs before all tests in this block
    console.log("> before Array");
  });

  after(() => {
    // runs after all tests in this block
    console.log("> after Array");
  });

  beforeEach(() => {
    // runs before each test in this block
    console.log("> beforeEach Array");
  });

  afterEach(() => {
    // runs after each test in this block
    console.log("> afterEach Array");
  });

  describe("#indexOf", function() {
    before(() => {
      // runs before all tests in this block
      console.log("> > before #indexOf");
    });

    after(() => {
      // runs after all tests in this block
      console.log("> > after #indexOf");
    });

    beforeEach(() => {
      // runs before each test in this block
      console.log("> > beforeEach #indexOf");
    });

    afterEach(() => {
      // runs after each test in this block
      console.log("> > afterEach #indexOf");
    });

    it("should return -1 when the value is not present", function() {
      console.log("it should return -1 when the value is not present");
    });

    it("should return 2 when the value is on third position", function() {
      console.log("it should return 2 when the value is on third position");
    });
  });
});

mocha.run();
