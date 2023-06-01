const errorController = require("../controllers/error-controller");
exports.pageNotFound = (request, response) => {
  errorController.getPageNotFound(request, response);
};
exports.page505 = (request, response) => {
  errorController.get500(request, response);
};
