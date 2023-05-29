const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

exports.getBooks = (request, response) => {
  response.writeHead(200, "good", { "content-type": "application/json" });
  response.end(JSON.stringify(getDataFromFile()));
};

exports.getBookById = (request, response) => {
  const id = request.url.slice(7);
  const book = getDataFromFile().filter((book) => book.id == id);
  response.writeHead(200, { "content-type": "application/json" });
  response.end(JSON.stringify(book));
};

exports.postBooks = (request, response) => {
  let body = [];
  request.on("data", (chunk) => {
    body.push(chunk);
  });
  request.on("end", () => {
    const id = crypto.randomUUID();
    body = JSON.parse(Buffer.concat(body).toString());
    const books = getDataFromFile();
    books.push({ id: id, name: body.name });
    fs.writeFileSync("./data/books.json", JSON.stringify(books));
    response.end("good");
  });
};

const getDataFromFile = () => {
  return JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "data", "books.json"), "utf-8")
  );
};
