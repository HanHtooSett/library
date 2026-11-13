import './style.css'

const myLibrary = [];

function Book(title, author, numberOfPages) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
}

function addBookToLibrary(title, author, numberOfPages) {
    const newBook = new Book(title, author, numberOfPages);
    myLibrary.push(newBook);
    displayBooks();

}

function displayBooks() {
    console.log(myLibrary)
}

console.log("Hello")
displayBooks();


document.getElementById("add").onclick = function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const numberOfPages = document.getElementById('numberOfPages').value
    console.log("hhh");
    addBookToLibrary(title, author, numberOfPages);
}