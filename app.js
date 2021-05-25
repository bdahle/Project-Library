let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  console.log(`${this.title} by ${this.author}, ${this.pages}, ${this.read}`);
};

const hp1 = new Book(
  "Harry Potter and the Philosopher's Stone",
  "J.K. Rowling",
  309,
  "read"
);
hp1.info();
