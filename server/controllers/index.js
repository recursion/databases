var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      // a function which handles a get request for all messages

      // retrieve messages from the DB

      // send them back to the client
    },
    post: function (req, res) {
      // a function which handles posting a message to the database

      // gather the posted data

      // insert it to the DB
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};
