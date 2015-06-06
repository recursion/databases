var db = require('../db');




module.exports = {
  messages: {
    get: function () {
      // a function which produces all the messages

      // return the messages table

      // should we pack these into an array??

      db.connection.query('SELECT * from messages', function(err, rows) {
        if (err) {
          throw err;
        }
        console.log(rows);
        // return retrieved data
      });

    },
    // takes a message object with roomname, username, message
    post: function (messageObj) {
      // a function which can be used to insert a message into the database

      // construct a query string that inserts the message data into the db
      db.connection.query('insert into messages (message, room, user) values (messageObj.message, messageObj.room, messageObj.user);', function(err, rows) {
        if (err) {
          throw err;
        }
        console.log(rows);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

