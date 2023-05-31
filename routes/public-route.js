const publicController = require("../controllers/public-controller");

module.exports = function (request, response) {
  const url = request.url;
  switch (url) {
    case "/public/main.css": {
      publicController.getCSS(request, response);
    }
  }
};
