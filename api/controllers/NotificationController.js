/**
 * NotificationController
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
    Notification.create({
      note: req.params('note'),
      source: req.params('source')
    }).done(function(err, notification) {
      if (err) {
        return console.log(err);
      } else {
        console.log("Notification created:", notification);
      }
    });
  },
  seedNotifications: function(req, res) {
    var seeds = [
      {note: "Your friend Amy has signed up.", source: "friend"},
      {note: "You have a new message", source: "message"},
      {note: "You should update your trip soon.", source: "reminder"},
      {note: "New comment in trip plan.", source: "comment"},
      {note: "Your friend Amy has signed up.", source: "friend"},
      {note: "You have a new message", source: "message"},
      {note: "You should update your trip soon.", source: "reminder"},
      {note: "New comment in trip plan.", source: "comment"},
      {note: "Your friend Amy has signed up.", source: "friend"},
      {note: "You have a new message", source: "message"},
      {note: "You should update your trip soon.", source: "reminder"},
      {note: "New comment in trip plan.", source: "comment"},
      {note: "Your friend Amy has signed up.", source: "friend"},
      {note: "You have a new message", source: "message"},
      {note: "You should update your trip soon.", source: "reminder"},
      {note: "New comment in trip plan.", source: "comment"}
    ];

    seeds.forEach(function(item) {
      Notification.create(item).done(function(err, notification) {
        if(err) {
          return console.log(err);
        } else {
          console.log("Notification created", notification);
        }
      });
    });

  },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to NotificationController)
   */
  _config: {}


};
