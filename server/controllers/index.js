var express = require('express');
var router = express.Router();

/**
  * @description
  * First route will handle the static html file delievery.
  * Second route will handle the API calls.
*/
router.use('/vars',require('./vars'));
router.use('/server',require('./server'));


router.use('/',function(req, res, next) {
     res.render('index.html');
  });
module.exports = router;