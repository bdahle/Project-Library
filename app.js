let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages}, ${this.status}`;
};

function addBookToLibrary(title, author, pages, status) {
  const newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook);
  newBookForm.reset();
}

function clearTableBody() {
  for (var i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}

function updateTable() {
  clearTableBody();

  myLibrary.forEach((book, i) => {
    let row = table.insertRow();
    addCell(row, book.title);
    addCell(row, book.author);
    addCell(row, book.pages);
    addCell(row, book.status);

    let btn = document.createElement("button");
    btn.innerHTML = "DELETE";
    btn.setAttribute("data-index", i);
    btn.addEventListener("click", (e) => {
      console.log(e.target.getAttribute("data-index"));
      myLibrary.splice(e.target.getAttribute("data-index"), 1);
      updateTable();
    });
    let cell = row.insertCell();
    cell.appendChild(btn);
  });
}

function addCell(row, cellText) {
  let cell = row.insertCell();
  let text = document.createTextNode(cellText);
  cell.appendChild(text);
}

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const statusSelect = document.querySelector("#status");
const newBookForm = document.querySelector(".new-book-form");
let table = document.querySelector("table");

newBookForm.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent reloading the page
  addBookToLibrary(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    statusSelect.value
  );
  updateTable();
});

addBookToLibrary(
  "Harry Potter and the Philosopher's Stone",
  "J.K. Rowling",
  309,
  "READ"
);
addBookToLibrary("Tools of Titans", "Timothy Ferriss", 707, "READ");
addBookToLibrary("Dune", "Frank Herbert", 688, "READ");
addBookToLibrary(
  "Man's Search for Meaning",
  "Viktor E. Frankl",
  165,
  "NOT READ"
);

updateTable();
