const http = require("http");
const booksRoute = require("./routes/books-route");
const errorRoute = require("./routes/error-route");

const PORT = 3000;
const HOSTNAME = "localhost";

const requestHandler = (request, response) => {
  if (request.url.startsWith("/books")) {
    booksRoute(request, response);
  } else {
  }
};
const server = http.createServer(requestHandler);
server.listen(3000, HOSTNAME, PORT, () => {
  console.log("The server now is listening on port ", PORT);
});
