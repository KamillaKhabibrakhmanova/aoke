var OpenTok = require('opentok'),
    opentok = new OpenTok(45232972, '328a1cbe87d9bbf7f72d11ee339f2d627f3fedf3'),
    sessionID;


opentok.createSession(null, {mediaMode:"routed"}, function(error, result) {
  if (error) {
    console.log("Error creating session:", error)
  } else {
    sessionId = result;
    console.log("Session ID: " + sessionId);
  }
});

opentok.generateToken(sessionID, {'role:publisher'});
