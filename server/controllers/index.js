var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      // a function which handles a get request for all messages

      // retrieve messages from the model
      models.messages.get();

    },
    post: function (req, res) {
      // a function which handles posting a message to the database

      // post messages to the model

    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

