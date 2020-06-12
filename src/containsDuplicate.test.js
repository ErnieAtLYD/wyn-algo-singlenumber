// Import the module of the function you wrote.

const containsDuplicate = require("./containsDuplicate");

describe("containsDuplicate", () => {
  it("should be true if [1,2,3,1]", () => {
    expect(containsDuplicate([1,2,3,1])).toBe(true);
  });
  it("should be false if [1,2,3,4]", () => {
    expect(containsDuplicate([1,2,3,4])).toBe(false);
  });
  it("should be true if [1,1,1,3,3,4,3,2,4,2]", () => {
    expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true);
  });
});
