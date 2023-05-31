module.exports = function redirectUser(request, response, location) {
  response.writeHead(302, {
    location: location,
  });
  response.end();
};
