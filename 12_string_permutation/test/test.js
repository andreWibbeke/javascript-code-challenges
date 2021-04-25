import { assert } from "chai";
import { factorial } from "../index.js";

describe("recursive factorial function", () => {
  it("should return number of possible char combinations", () => {
    assert.strictEqual(factorial("car".length), 6);
  });

  it("should return number of possible char combinations", () => {
    assert.strictEqual(factorial("asdf".length), 24);
  });

  it("should return number of possible char combinations", () => {
    assert.strictEqual(factorial("hello".length), 120);
  });

  it("should return number of possible char combinations", () => {
    assert.strictEqual(factorial("scrabble".length), 40320);
  });
});
