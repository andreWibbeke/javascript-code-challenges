// Create objects using class syntax
class BookClass {
  constructor(title, author, isbn, totalCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.totalCopies = totalCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (this.totalCopies === 0) {
      return "out of stock";
    } else if (this.totalCopies < 10) {
      return "low stock";
    }

    return "in stock";
  }

  sell(numSold = 1) {
    if (numSold > this.totalCopies) {
      return "not enough copies";
    }
    this.totalCopies -= numSold;
  }

  restock(numCopies = 5) {
    this.totalCopies += numCopies;
  }
}

// Create objects using a constructor function (getter can't be defined on a constructor)
function BookFunction(title, author, isbn, totalCopies) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.totalCopies = totalCopies;
}

// Declare functions on the prototype, so each instance of Book doesn't create a new function
// (each object created from BookFunction shares / references the same prototype)
BookFunction.prototype.getAvailability = function () {
  if (this.totalCopies === 0) {
    return "out of stock";
  } else if (this.totalCopies < 10) {
    return "low stock";
  }

  return "in stock";
};

BookFunction.prototype.sell = function (numSold = 1) {
  if (numSold > this.totalCopies) {
    return "not enough copies";
  }
  this.totalCopies -= numSold;
};

BookFunction.prototype.restock = function (numCopies = 5) {
  this.totalCopies += numCopies;
};

module.exports = BookFunction;
