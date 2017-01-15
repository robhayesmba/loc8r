var express = require('express'),
  router = express.Router(),
  controllerMain = require('../controllers/main');

/* GET home page. */
router.get('/', controllerMain.index);

module.exports = router;
