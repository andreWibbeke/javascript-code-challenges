import { assert } from "chai";
import TechnicalBookClass from "../index.js";

describe("Book class", function () {
  describe("Book instance properties", () => {
    let techBook;

    before(function () {
      techBook = new TechnicalBookClass(
        "The Great Gatsby",
        "F. Scott Fitzgerald",
        1234,
        5,
        "fith"
      );
    });

    it("should have a title property", function () {
      assert.strictEqual(techBook.title, "The Great Gatsby");
    });

    it("should have an author property", function () {
      assert.strictEqual(techBook.author, "F. Scott Fitzgerald");
    });

    it("should have an isbn property", function () {
      assert.strictEqual(techBook.isbn, 1234);
    });

    it("should have an availability property", function () {
      assert.strictEqual(techBook.availability, "low stock");
    });

    it("should have an edition property", function () {
      assert.strictEqual(techBook.edition, "fith");
    });

    it("should return 'in stock'", function () {
      techBook.restock(10);
      assert.strictEqual(techBook.availability, "in stock");
    });

    it("should return 'out of stock'", function () {
      techBook.sell(15);
      assert.strictEqual(techBook.availability, "out of stock");
    });
  });

  describe("Book instance methods", () => {
    it("should use default values", () => {
      const techBook = new TechnicalBookClass(
        "The Great Gatsby",
        "F. Scott Fitzgerald",
        1234,
        10,
        "fith"
      );
      techBook.sell();
      techBook.restock();
      assert.strictEqual(techBook.totalCopies, 14);
    });

    it("should deduct and add correct amount of books", () => {
      const techBook = new TechnicalBookClass(
        "The Great Gatsby",
        "F. Scott Fitzgerald",
        1234,
        10,
        "fith"
      );
      techBook.sell(5);
      techBook.restock(5);
      assert.strictEqual(techBook.totalCopies, 10);
    });
  });
});
