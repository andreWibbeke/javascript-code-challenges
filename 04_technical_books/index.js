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

class TechnicalBookClass extends BookClass {
  constructor(title, author, isbn, totalCopies, edition) {
    super(title, author, isbn, totalCopies);
    this.edition = edition;
  }
  getEdition() {
    return `The current version of this book is ${this.edition}.`;
  }
}

export default TechnicalBookClass;
