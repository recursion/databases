var models = require('../models');
var bluebird = require('bluebird');
var utils = require('../request-handler');


module.exports = {
  messages: {
    get: function (req, res) {
      // a function which handles a get request for all messages

      // retrieve messages from the model
      models.messages.get();
      utils.sendResponse(req, res);
    },
    post: function (req, res) {
      // a function which handles posting a message to the database

      // gather the post data
      console.log(req.body);

      // console.log(req.body); // and see what we get

      // pack it into a messages object

      // post messagesObject to the model
      // models.messages.post(messageObj);
      utils.sendResponse(req, res);
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

