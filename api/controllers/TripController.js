/**
 * TripController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
  showOne: function(req, res) {
    Trip.findOne({
      name: req.param('name'),
      begins: req.param('begins'),
      ends: req.param('ends')
    }).done(function(err, trip) {
      if (err) {
        return console.log(err);
      } else {
        console.log("Trip displayed:", trip);
      }
    });
  },
  showByName: function(req, res) {
    Trip.findByName(req.param('name')).done(function(err, trip) {
      if (err) {
        return console.log(err);
      } else {
        console.log("Trip displayed:", trip);
      }
    });
  },
  showAll: function(req, res) {
    Trip.find().done(function(err, trips) {
      if (err) {
        return console.log(err);
      } else {
        res.json(trips);
        console.log("Trips found:", trips);
      }
    });
  },
  create: function(req, res) {
    Trip.create({
      name: req.param('name')
    }).done(function(err, trip) {
      if (err) {
        return console.log(err);
      }else {
        console.log("Trip created:", trip);
      }
    });
  },
  update: function(req, res) {
    Trip.update({
      name: req.param('name')
    }).done(function(err, trip) {
      if (err) {
        return console.log(err);
      } else {
        console.log("Trip updated:", trip);
      }
    });
  },
  destroy: function(req, res) {
    Trip.findByName(req.params('name')).destroy({

    }).done(function(err, trip) {
      if (err) {
        return console.log(err);
      } else {
        console.log("Trip deleted:", trip);
      }
    });
  },
  seedTrips: function(req, res) {
    var seeds = [
      {name: "Journey to the West", begins: "12/1/2013", ends: "12/15/2013"},
      {name: "Friends", begins: "12/1/2013", ends: "12/15/2013"},
      {name: "The Price is Right", begins: "12/1/2013", ends: "12/15/2013"},
      {name: "The Jerry Springer Show", begins: "12/1/2013", ends: "12/15/2013"},
      {name: "Late Night With Jay Leno", begins: "12/1/2013", ends: "12/15/2013"},
      {name: "The Tonight Show", begins: "12/1/2013", ends: "12/15/2013"},
      {name: "Family Guy", begins: "12/1/2013", ends: "12/15/2013"},
      {name: "The Simpson", begins: "12/1/2013", ends: "12/15/2013"},
      {name: "Third Rock from the Sun", begins: "12/1/2013", ends: "12/15/2013"},
      {name: "The Big Bang Thoery", begins: "12/1/2013", ends: "12/15/2013"},
      {name: "The Jersey Shore", begins: "12/1/2013", ends: "12/15/2013"},
      {name: "American Idol", begins: "12/1/2013", ends: "12/15/2013"},
      {name: "Big Brother", begins: "12/1/2013", ends: "12/15/2013"},
      {name: "Prison Break", begins: "12/1/2013", ends: "12/15/2013"},
      {name: "Law and Order", begins: "12/1/2013", ends: "12/15/2013"}
    ];

    seeds.forEach(function(item) {
      Trip.create(item).done(function(err, item) {
        if (err) {
          return console.log(err);
        } else {
          console.log("Trip created:", item);
        }
      });
    });

  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to TripController)
   */
  _config: {}

};
