const assert = require("chai").assert;
const Movie = require("../index");

describe("Movie class", function () {
  let exampleMovie;

  before(function () {
    exampleMovie = new Movie(
      "Ghostbusters",
      "Ivan Reitman",
      "fantasy",
      1984,
      7.8
    );
  });

  describe("Movie instance properties", () => {
    it("should have a title property of type string", function () {
      assert.strictEqual(exampleMovie.title, "Ghostbusters");
    });

    it("should have a director property of type string", function () {
      assert.strictEqual(exampleMovie.director, "Ivan Reitman");
    });

    it("should have a genre property of type string", function () {
      assert.strictEqual(exampleMovie.genre, "fantasy");
    });

    it("should have a releaseYear property of type number", function () {
      assert.strictEqual(exampleMovie.releaseYear, 1984);
    });

    it("should have a rating property of type number", function () {
      assert.strictEqual(exampleMovie.rating, 7.8);
    });
  });

  describe("Movie instance methods", () => {
    it("log the overview of each film", () => {
      const result =
        "Ghostbusters, a fantasy film directed by Ivan Reitman was released in 1984." +
        " It received a rating of 7.8.";
      assert.strictEqual(exampleMovie.getOverview(), result);
    });
  });
});
