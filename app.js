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

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary(
  "Harry Potter and the Philosopher's Stone",
  "J.K. Rowling",
  309,
  "read"
);
addBookToLibrary("Tools of Titans", " Timothy Ferriss", 707, "read");
