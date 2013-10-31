/**
 * isAuthenticated
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {

  var passport = require('passport');
  var TwitterStrategy = require('passport-twitter').Strategy;

  passport.use(new TwitterStrategy({
      consumerKey: "iDlLR56w66Zmi6TkCPEcJg",
      consumerSecret: "oPi0y1kLd26PC2FXjIEwv7HgTQtQ5TxRnUBof3YjL4",
      callbackURL: "/auth/twitter/callback"
    },
    function(token, tokenSecret, profile, done) {
      User.findOrCreate({name: req.params('name')}, function(err, user) {
        if (err) { return done(err); }
        done(null, user);
      });
    }
  ));

  app.get('/auth/twitter', passport.authenticate('twitter'));
  app.get('/auth/twitter/callback', passport.authenticate('twitter', { successRedirect: '/fb2', failureRedirect: '/' }));

  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  if (req.session.authenticated) {
    return next();
  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('You are not permitted to perform this action.');
};
