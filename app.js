let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
};

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary(
  "Harry Potter and the Philosopher's Stone",
  "J.K. Rowling",
  309,
  "READ"
);
addBookToLibrary("Tools of Titans", "Timothy Ferriss", 707, "READ");

let table = document.querySelector("table");

function displayAllBooks() {
  myLibrary.forEach((book) => {
    let row = table.insertRow();

    addCell(row, book.title);
    addCell(row, book.author);
    addCell(row, book.pages);
    addCell(row, book.read);
  });
}

function addCell(row, cellText) {
  let cell = row.insertCell();
  let text = document.createTextNode(cellText);
  cell.appendChild(text);
}

displayAllBooks();
