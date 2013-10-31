/**
 * UserController
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

  create: function(req, res) {
    User.create({name: req.params('name')}).done(function(err, user) {
      if (err) {
        return console.log(err);
      } else {
        console.log("User created:", user);
      }
    });
  },
  find: function(req, res) {
    User.find();
  },
  destroy: function(req, res) {

  },
  seedUsers: function(req, res) {
    var seeds = [
      {name: "Johnny Knoxville"},
      {name: "Steve Harvey"},
      {name: "Jerome McKeil"}
    ];
    seeds.forEach(function(user) {
      User.create(user).done(function(err, user) {
        if (err) {
          return console.log(err);
        } else {
          console.log("User created:", user);
        }
      });
    });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}

};
