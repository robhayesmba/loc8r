var express = require('express'),
  router = express.Router(),
  // ctrlMain = require('../controllers/main'),
  ctrlLocations = require('../controllers/locations'),
  ctrlOthers = require('../controllers/others');

/* Location pages. */
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other Pages. */
router.get('/about', ctrlOthers.about);

module.exports = router;
