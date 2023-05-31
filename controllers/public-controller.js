const path = require("path");
const fs = require("fs");

exports.getCSS = (request, response) => {
  response.writeHead(200, { "content-type": "text/css" });
  const css = fs.readFileSync(path.join(__dirname, "..", "public", "main.css"));
  response.end(css);
};
