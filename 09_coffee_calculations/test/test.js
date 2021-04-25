import { assert } from "chai";
import computeSum from "../index.js";

describe("computeSum() function", () => {
  it("should return a certain number", () => {
    assert.strictEqual(computeSum([2, 3, 1, 5]), "The total bill is 13.75");
  });
});
