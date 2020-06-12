// Import the module of the function you wrote.

const singleNumber = require("./exercise");

describe("singleNumber", () => {
  it("should be 1 if [2,2,1]", () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
  });
  it("should be 4 if [4,1,2,1,2]", () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
  });
  it("should be 10 if [1,3,5,7,10,1,3,5,7]", () => {
    expect(singleNumber([1, 3, 5, 7, 10, 1, 3, 5, 7])).toBe(10);
  });
});
