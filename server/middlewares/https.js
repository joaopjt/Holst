// HTTPS middleware
const requireHttps = require('hapi-require-https');

module.exports = function (Server) {
  if (App.https && App.https.enable) {
    Server.register({
      register: requireHttps,
      options:  App.https.options
    });
  }
}