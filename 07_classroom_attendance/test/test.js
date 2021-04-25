import { assert } from "chai";
import getStudents from "../index.js";
import {
  schoolClassWithAssistant,
  schoolClassWithoutAssistant,
} from "../data/data.js";

describe("getStudents() function", () => {
  context("has teaching assistant", () => {
    it("should return a list of students", () => {
      assert.sameOrderedMembers(getStudents(schoolClassWithAssistant), [
        "Bruce",
        "Jane",
      ]);
    });
  });

  context("has no teaching assistant", () => {
    it("should return a list of students", () => {
      assert.sameOrderedMembers(getStudents(schoolClassWithoutAssistant), [
        "Simon",
        "Bruce",
        "Jane",
      ]);
    });
  });
});
