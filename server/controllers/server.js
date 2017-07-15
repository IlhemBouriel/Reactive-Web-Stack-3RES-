var express = require('express');
var router = express.Router();
// require model file.
var serverModel = require('../models/server');

router.route('/')
  .get(function(req,res) {
    // Code to fetch the polls.
    var serversObject = new serverModel();
    // Calling our model function.
    serversObject.getAllServer(function(err,serverResponse) {
      if(err) {
        return res.json({"responseCode" : 1, "responseDesc" : serverResponse});
      }
      res.json({"responseCode" : 0, "responseDesc" : "Success", "data" : serverResponse});
    });
  })
  .post(function(req,res) {
    // Code to add new polls.
    var serversObject = new serverModel();
    // Calling our model function.
    // We nee to validate our payload here.
    serversObject.addNewServer(req.body,function(err,serverResponse) {
      if(err) {
        return res.json({"responseCode" : 1, "responseDesc" : serverResponse});
      }
      res.json({"responseCode" : 0, "responseDesc" : "Success","data" : serverResponse});
    });
  })
  .put(function(req,res) {
    // Code to update votes of poll.
    var serversObject = new serverModel();
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


  router.route('/:id').get(function(req,res) {
  	console.log(req.params.id);
    // Code to fetch the polls.
    var serversObject = new serverModel();
    // Calling our model function.
    serversObject.getVarsOfServer(req.params.id,function(err,serverResponse) {
      if(err) {
        return res.json({"responseCode" : 1, "responseDesc" : serverResponse});
      }
      res.json({"responseCode" : 0, "responseDesc" : "Success", "data" : serverResponse});
    });
  });

module.exports = router;