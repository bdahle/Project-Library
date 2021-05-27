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
function clearTableBody() {
  for (var i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}

function updateTable() {
  clearTableBody();

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

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const newBookForm = document.querySelector(".new-book-form");
let table = document.querySelector("table");

newBookForm.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent reloading the page
  addBookToLibrary(titleInput.value, authorInput.value, 707, "READ");
  updateTable();
});

addBookToLibrary(
  "Harry Potter and the Philosopher's Stone",
  "J.K. Rowling",
  309,
  "READ"
);
addBookToLibrary("Tools of Titans", "Timothy Ferriss", 707, "READ");

updateTable();
