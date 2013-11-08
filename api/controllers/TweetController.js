/**
 * TweetController
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

var Twit = require('twit');
var T = new Twit({
  consumer_key: 'iDlLR56w66Zmi6TkCPEcJg',
  consumer_secret: 'oPi0y1kLd26PC2FXjIEwv7HgTQtQ5TxRnUBof3YjL4',
  access_token: '64147911-j7lDjWdIJRLasrvaJxdjWoOAh4mj84fcfp0YwF8WX',
  access_token_secret: 'dtTo64OVoF1raYj3S6JAwB4UYmhQ2x9yZeF3y3BFxHKo8'
});

module.exports = {

  search: function(req, res) {

    console.log('hi');

    T.get('search/tweets', { q: req.query.q, count: 100 }, function(err, reply) {
      if (err) {
        return console.log(err);
      } else {
        console.log("Success tweeting", reply.statuses[0].user);
        res.send(reply);
      }
    });
  },
  homeTimeline: function(req, res) {

    T.get('statuses/home_timeline', { count: 100 } , function(err, reply) {
      if (err) {
        return console.log(err);
      } else {
        console.log("Success tweeting", reply);
        res.send(reply);
      }
    });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to TweetController)
   */
  _config: {}


};
