const fs = require("fs");
const path = require("path");

module.exports = function (request, response) {
  const url = request.url;
  switch (url) {
    case "/public/main.css": {
      response.writeHead(200, { "content-type": "text/css" });
      const css = fs.readFileSync(
        path.join(__dirname, "..", "public", "main.css")
      );
      response.end(css);
    }
  }
};
