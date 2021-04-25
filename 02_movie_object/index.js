// Create objects using class syntax
class MovieClass {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  getOverview() {
    const string = [
      `${this.title}, a ${this.genre} film directed by ${this.director}`,
      `was released in ${this.releaseYear}. It received a rating of ${this.rating}.`,
    ];
    return string.join(" ");
  }
}

// Create objects using a constructor function
function MovieFunction(title, director, genre, releaseYear, rating) {
  this.title = title;
  this.director = director;
  this.genre = genre;
  this.releaseYear = releaseYear;
  this.rating = rating;
}

MovieFunction.prototype.getOverview = function () {
  const string = [
    `${this.title}, a ${this.genre} film directed by ${this.director}`,
    `was released in ${this.releaseYear}. It received a rating of ${this.rating}.`,
  ];
  return string.join(" ");
};

module.exports = MovieFunction;
