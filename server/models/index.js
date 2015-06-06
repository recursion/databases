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
      });

      // return retrieved data

    },
    post: function () {
      // a function which can be used to insert a message into the database
      // insert a message to the db
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

