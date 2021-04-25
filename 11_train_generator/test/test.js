import { assert } from "chai";
import { yieldTrainStops } from "../index.js";
import data from "../data/data.js";

describe("console.log the next train station on botton click", () => {
  let generator;
  before(() => {
    generator = yieldTrainStops(data);
  });

  it("should return the first train station", () => {
    assert.strictEqual(generator.next().value, "Poughkeepsie");
  });

  it("should return the next train station", () => {
    assert.strictEqual(generator.next().value, "Newburgh");
  });

  it("should return true, when finished", () => {
    generator = yieldTrainStops(data);
    for (let i = 0; i < data.length; i++) {
      generator.next();
    }

    assert.strictEqual(generator.next().done, true);
  });
});
