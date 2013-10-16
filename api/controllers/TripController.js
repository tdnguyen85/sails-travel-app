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

    });
  },
  showAll: function(req, res) {
    Trip.find().done(function(err, trips) {
      if (err) {
        return console.log(err);
      } else {
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
    Trip.destroy({

    }).done(function(err, trip) {
      if (err) {
        return console.log(err);
      } else {
        console.log("Trip deleted:", trip);
      }
    });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to TripController)
   */
  _config: {}

};
