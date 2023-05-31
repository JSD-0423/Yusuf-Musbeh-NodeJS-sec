const http = require("http");
const booksRoute = require("./routes/books-route");
const errorRoute = require("./routes/error-route");
const publicRoute = require("./routes/public-route");
const pug = require("pug");
const redirect = require("./utils/redirect");

const PORT = 3000;
const HOSTNAME = "localhost";

const requestHandler = (request, response) => {
  console.log(request.url);
  if (request.url == "/") {
    return redirect(request, response, "books");
  }
  if (request.url.startsWith("/public")) {
    return publicRoute(request, response);
  }

  booksRoute(request, response);
};
const server = http.createServer(requestHandler);
server.listen(3000, HOSTNAME, PORT, () => {
  console.log("The server now is listening on port ", PORT);
});
