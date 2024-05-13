var express = require('express');
var router = express.Router();

/* GET contatc page. */
router.get('/', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
