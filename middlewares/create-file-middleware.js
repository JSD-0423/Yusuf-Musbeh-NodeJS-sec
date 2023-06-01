const fs = require("fs");
const path = require("path");

exports.createFile = (request, response) => {
  const isExist = fs.existsSync(
    path.join(__dirname, "..", "data", "books.json")
  );
  if (!isExist) {
    return fs.writeFileSync(
      path.join(__dirname, "..", "data", "books.json"),
      "[]"
    );
  }
  const fileContent = fs.readFileSync(
    path.join(__dirname, "..", "data", "books.json")
  );
  if (fileContent === "") {
    return fs.writeFileSync(
      path.join(__dirname, "..", "data", "books.json"),
      "[]"
    );
  }
};
