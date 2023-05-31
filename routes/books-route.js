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
  console.log("handleing get");
  if (request.url == "/books") {
    console.log("returning books page");
    booksController.getBooks(request, response);
    // get all books
  } else if (request.url == "/add-book") {
    console.log("returning add book page");
    booksController.getAddBook(request, response);
  } else if (request.url.startsWith("/books/")) {
    console.log("returning book by id page");
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
