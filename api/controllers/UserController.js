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
      {firstName: "Johnny", lastName: "Knoxville", username: "JKnox", password: "seed", age: 40, gender: "male", location: "Los Angeles"},
      {firstName: "Steve", lastName: "Harvey", username: "Steve", password: "seed", age: 44, gender: "male", location: "Los Angeles"},
      {firstName: "Blue", lastName: "Ivey", username: "BI", password: "seed", age: 3, gender: "female", location: "New York"},
      {firstName: "Dave", lastName: "Chappelle", username: "Chap", password: "seed", age: 35, gender: "male", location: "Oakland"},
      {firstName: "Lionel", lastName: "Messi", username: "Lion", password: "seed", age: 26, gender: "male", location: "Barcelona"},
      {firstName: "Claire", lastName: "Dane", username: "Claire", password: "seed", age: 40, gender: "female", location: "Los Angeles"}
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
