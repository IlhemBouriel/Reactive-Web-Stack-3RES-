var express = require('express');
var router = express.Router();

router.route('/')
  .get(function(req,res) {
    // Code to fetch the polls.
  })
  .post(function(req,res) {
    // Code to add new polls.
  })
  .put(function(req,res) {
    // Code to update votes of poll.
  });

module.exports = router;