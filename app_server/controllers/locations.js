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
  res.render('location-info', {
      title: 'Starcups',
      pageHeader: {
          title: 'Starcups'
      },
      sidebar: {
          context: 'is on Loc8r because it has accessible wifi and space to sitdown with your laptop and get some work done.',
          callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
      },
      location: {
          name: 'Starcups',
          address: '123 Main Street, Anytown, US 12345',
          rating: 3,
          facilities: ['Hot drinks', 'Food', 'Premium Wifi'],
          coords: {lat: 44.9778, lng: 93.2650},
          openingTimes: [{
              days: 'Monday - Friday',
              opening: '7:00am',
              closing: '7:00pm',
              closed: false
          },{
              days: 'Saturday',
              opening: '8:00am',
              closing: '5:00pm',
              closed: false
          },{
              days: 'Sunday',
              closed: true
          }],
          reviews: [{
              author: 'Jill Jones',
              rating: 5,
              timestamp: '17 June 2016',
              reviewText: 'What a great place. The best!'
          },{
              author: 'Bill Berditzman',
              rating: 3,
              timestamp: '2 August 2016',
              reviewText: 'Fast wifi but so-so coffee and food was not that good'
          }]
      }
  });
};

/* Get 'Add review' page */
module.exports.addReview = function (req, res) {
  res.render('location-review-form', {
      title: 'Review Starcups on Loc8r',
      pageHeader: { title: 'Review Starcups' }
  });
};
