const booksController = require("../controllers/books-controller");

module.exports = (request, response) => {
  switch (request.method) {
    case "GET": {
      handleGetRequests(request, response);
      break;
    }
    case "POST": {
      handlePostRequests(request, response);
      break;
    }
  }
};

function handleGetRequests(request, response) {
  if (request.url == "/books") {
    booksController.getBooks(request, response);
    // get all books
  } else if (request.url == "/add-book") {
    booksController.getAddBook(request, response);
  } else if (request.url.startsWith("/books/")) {
    booksController.getBookById(request, response);
    // get specific book
  }
}
function handlePostRequests(request, response) {
  if (request.url == "/books") {
    booksController.postBooks(request, response);
    // add book books
  }
}
