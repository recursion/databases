var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {console.log("GET GET GET GET GET GET GET")}, // a function which handles a get request for all messages
    post: function (req, res) {console.log("POST POST POST POST POST POST")} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

