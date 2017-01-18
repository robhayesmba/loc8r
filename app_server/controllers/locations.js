/* Get 'home' page */
module.exports.homeList = function (req, res) {
  res.render('locations-list', {
     title: 'Loc8r - find a place to work with wifi',
     pageHeader: {
         title: 'Loc8r',
         strapline: 'Find places to work with wifi near you!'
     },
     sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about.  Perhaps with coffee, cake or a pint?  Let Loc8r help you find the place you're looking for.",
     locations: [{
         name: 'Starcups',
         address: '123 Main Street, Anytown US 12345',
         rating: 3,
         facilities: ['Hot Drinks', 'Food', 'Premium wifi'],
         distance: '1m'
     },{
         name: 'Billy Bob\'s',
         address: '456 Main Street, Anytown US 12345',
         rating: 4,
         facilities: ['Hot Drinks', 'Food', 'Premium wifi'],
         distance: '1.5m'
     },{
         name: 'Joe\'s',
         address: '123 Main Street, Anytown US 12345',
         rating: 5,
         facilities: ['Food', 'Premium wifi'],
         distance: '5m'
     }]
  });
};

/* Get 'Location Info' page */
module.exports.locationInfo = function (req, res) {
  res.render('location-info', { title: 'Location info' });
};

/* Get 'Add review' page */
module.exports.addReview = function (req, res) {
  res.render('location-review-form', { title: 'Add review' });
};
