const http = require("http");
const booksRoute = require("./routes/books-route");
const errorRoute = require("./routes/error-route");
const pug = require("pug");
const redirect = require("./utils/redirect");

const PORT = 3000;
const HOSTNAME = "localhost";

const requestHandler = (request, response) => {
  console.log(request.url);
  if (request.url == "/") {
    redirect(request, response, "books");
  }

  booksRoute(request, response);
};
const server = http.createServer(requestHandler);
server.listen(3000, HOSTNAME, PORT, () => {
  console.log("The server now is listening on port ", PORT);
});
