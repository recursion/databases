var uuid = require('node-uuid');

var messages = [];

var returnMessages = function(request, response, roomname) {
  var results = {};
  var returnMessages;
  if (roomname) {
    returnMessages = getMessagesByRoom(roomname);
  } else {
    returnMessages = messages;
  }
  constructHeader(response);
  results.results = returnMessages;
  response.end(JSON.stringify(results));
};

exports.sendResponse = function(request, response, content) {
  var results = {};
  content = content || null;
  constructHeader(response);
  results.results = content;
  response.end(JSON.stringify(results));
};

var getMessagesByRoom = function(roomname) {
  var roomMessages = [];
  for (var i =0; i < messages.length; i++){
    if (messages[i].roomname === roomname){
      roomMessages.push(messages[i]);
    }
  }
  return roomMessages;
};

// Gather POST data and pass it to messageBuilder
var gatherPostData = function(request, response) {
  var body = '';
  request.on('data', function(chunk){
    body += chunk.toString();
  });
  request.on('end', function() {
    var postObj = JSON.parse(body);
    messageBuilder(postObj);
  });
};

//takes passed in object parameters and builds an object with
//additional metadata to be passed to the global messages array
var messageBuilder = function (dataObj) {
  var messageObject = {
    message : dataObj.message,
    username : dataObj.username,
    roomname : dataObj.roomname,
    createdAt : Date.now(),
    uniqueId : uuid.v1(),
    updatedAt : Date.now()
  };
  messages.push(messageObject);
};

// creates header data, status code and content type for each request
var constructHeader = function (response, status) {
  status = status || 200;
  var statusCode = status;
  var headers = defaultCorsHeaders;
  headers['Content-Type'] = "application/JSON";
  response.writeHead(statusCode, headers);
};

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

/// EXPORTS
exports.returnMessages = returnMessages;
exports.gatherPostData = gatherPostData;
