var express = require('express');
var router = express.Router();
// require model file.
var serverModel = require('../models/server');

router.route('/')
  .get(function(req,res) {
    // Code to fetch the polls.
    var serverObject = new serverModel();
    // Calling our model function.
    serverObject.getAllServer(function(err,serverResponse) {
      if(err) {
        return res.json({"responseCode" : 1, "responseDesc" : serverResponse});
      }
      res.json({"responseCode" : 0, "responseDesc" : "Success", "data" : serverResponse});
    });
  })
  .post(function(req,res) {
    console.log("post received");
    // Code to add new polls.
    var serverObject = new serverModel();
    // Calling our model function.
    // We nee to validate our payload here.
    serverObject.addNewServer(req.body,function(err,serverResponse) {
      console.log('body => '+req.body);
      if(err) {
        return res.json({"responseCode" : 1, "responseDesc" : serverResponse});
      }
      res.json({"responseCode" : 0, "responseDesc" : "Success","data" : serverResponse});
    });
  })
  .put(function(req,res) {
    // Code to update votes of poll.
    var serverObject = new serverModel();
    console.log('not yet ');
    // Calling our model function.
    // We need to validate our payload here.
   /* varsObject.votePollOption(req.body,function(err,varResponse) {
      if(err) {
        return res.json({"responseCode" : 1, "responseDesc" : varResponse});
      }
      res.json({"responseCode" : 0, "responseDesc" : "Success", "data" : varResponse});
    });*/
  });

module.exports = router;