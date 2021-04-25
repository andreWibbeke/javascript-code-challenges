const assert = require("chai").assert;
const Book = require("../index");

describe("Book class", function () {
  describe("Book instance properties", () => {
    let exampleBook;

    before(function () {
      exampleBook = new Book("foo", "bar", 1234, 5);

      if (!exampleBook.availability) {
        Object.defineProperty(exampleBook, "availability", {
          get: function () {
            return this.getAvailability();
          },
        });
      }
    });

    it("should have a title property", function () {
      assert.strictEqual(exampleBook.title, "foo");
    });

    it("should have an author property", function () {
      assert.strictEqual(exampleBook.author, "bar");
    });

    it("should have an isbn property", function () {
      assert.strictEqual(exampleBook.isbn, 1234);
    });

    it("should have an availability property", function () {
      assert.strictEqual(exampleBook.availability, "low stock");
    });

    it("should return 'in stock'", function () {
      exampleBook.restock(10);
      assert.strictEqual(exampleBook.availability, "in stock");
    });

    it("should return 'out of stock'", function () {
      exampleBook.sell(15);
      assert.strictEqual(exampleBook.availability, "out of stock");
    });
  });

  describe("Book instance methods", () => {
    it("should use default values", () => {
      const exampleBook = new Book("foo", "bar", 1234, 10);
      exampleBook.sell();
      exampleBook.restock();
      assert.strictEqual(exampleBook.totalCopies, 14);
    });

    it("should deduct and add correct amount of books", () => {
      const exampleBook = new Book("foo", "bar", 1234, 10);
      exampleBook.sell(5);
      exampleBook.restock(5);
      assert.strictEqual(exampleBook.totalCopies, 10);
    });
  });
});
