const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const pug = require("pug");
const redirect = require("../utils/redirect");
const errorRoute = require("../routes/error-route");

exports.getBooks = (request, response) => {
  try {
    const books = getDataFromFile();
    const template = pug.compileFile("./views/books.pug");
    const renderedTemplate = template({ books: books, path: "/books" });
    response.writeHead(200, "good", { "content-type": "text/html" });
    response.end(renderedTemplate);
  } catch (e) {
    console.error(e);
    return errorRoute.page505(request, response);
  }
};

exports.getBookById = (request, response) => {
  try {
    const id = request.url.slice(7);
    const book = getDataFromFile().find((book) => book.id == id);
    const template = pug.compileFile("./views/book.pug");
    const renderedTemplate = template({
      book: book,
      path: "/books",
    });
    response.writeHead(200, { "content-type": "text/html" });
    response.end(renderedTemplate);
  } catch (e) {
    console.error(e);
    return errorRoute.page505(request, response);
  }
};

exports.getAddBook = (request, response, message) => {
  try {
    const template = pug.compileFile("./views/add-book.pug");
    const renderedTemplate = template({
      path: "/add-books",
      message: message,
    });
    response.writeHead(200, { "content-type": "text/html" });
    response.end(renderedTemplate);
  } catch (e) {
    console.error(e);
    return errorRoute.page505(request, response);
  }
};

exports.postBooks = (request, response) => {
  try {
    let body = [];
    request.on("data", (chunk) => {
      body.push(chunk);
    });
    request.on("end", () => {
      const id = crypto.randomUUID();
      body = Buffer.concat(body).toString();

      let name = body
        .slice(body.indexOf("="))
        .replaceAll("+", " ")
        .replace("=", "");
      if (!name) {
        return this.getAddBook(request, response, "Book name is required");
      }
      const books = getDataFromFile();
      books.push({ id: id, name: name });
      fs.writeFileSync("./data/books.json", JSON.stringify(books));

      redirect(request, response, "books");
    });
  } catch (e) {
    console.error(e);
    return errorRoute.page505(request, response);
  }
};

const getDataFromFile = () => {
  try {
    return JSON.parse(
      fs.readFileSync(path.join(__dirname, "..", "data", "books.json"), "utf-8")
    );
  } catch (e) {
    console.error(e);
    return errorRoute.page505(request, response);
  }
};
