const pug = require("pug");
const path = require("path");
exports.getPageNotFound = (request, response) => {
  const template = pug.compileFile(path.join("views", "error.pug"));
  const renderedTemplate = template({ message: "Page Not Found" });
  response.writeHead(404, { "content-type": "text/html" });
  response.end(renderedTemplate);
};

exports.get500 = (request, response) => {
  const template = pug.compileFile(path.join("views", "error.pug"));
  const renderedTemplate = template({
    message: "Sorry, Something went wrong We are trying to fix it",
  });
  response.writeHead(404, { "content-type": "text/html" });
  response.end(renderedTemplate);
};
