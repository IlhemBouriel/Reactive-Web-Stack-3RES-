var express = require('express');
var router = express.Router();
// require model file.
var varModel = require('../models/vars');

router.route('/')
  .get(function(req,res) {
    // Code to fetch the polls.
    var varsObject = new varModel();
    // Calling our model function.
    varsObject.getAllVars(function(err,varResponse) {
      if(err) {
        return res.json({"responseCode" : 1, "responseDesc" : varResponse});
      }
      res.json({"responseCode" : 0, "responseDesc" : "Success", "data" : varResponse});
    });
  })
  .post(function(req,res) {
    console.log("post received");
    // Code to add new polls.
    var varsObject = new varModel();
    // Calling our model function.
    // We nee to validate our payload here.
    varsObject.addNewVars(req.body,function(err,varResponse) {
      console.log('body => '+req.body);
      if(err) {
        return res.json({"responseCode" : 1, "responseDesc" : varResponse});
      }
      res.json({"responseCode" : 0, "responseDesc" : "Success","data" : varResponse});
    });
  })
  .put(function(req,res) {
    // Code to update votes of poll.
    var varsObject = new varModel();
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