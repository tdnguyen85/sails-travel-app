/**
 * Routes
 *
 * Sails uses a number of different strategies to route requests.
 * Here they are top-to-bottom, in order of precedence.
 *
 * For more information on routes, check out:
 * http://sailsjs.org/#documentation
 */



/**
 * (1) Core middleware
 *
 * Middleware included with `app.use` is run first, before the router
 */


/**
 * (2) Static routes
 *
 * This object routes static URLs to handler functions--
 * In most cases, these functions are actions inside of your controllers.
 * For convenience, you can also connect routes directly to views or external URLs.
 *
 */

module.exports.routes = {

  // By default, your root route (aka home page) points to a view
  // located at `views/home/index.ejs`
  //
  // (This would also work if you had a file at: `/views/home.ejs`)
  '/': {
    view: 'home/index'
  },
  '/test': {
    view: 'test/stuff'
  },
  '/fb': {
    view: 'test/fb'
  },
  '/fb2': {
    view: 'test/fb2'
  },
  '/polymer': {
    view: 'polymer/poly'
  },
  '/polymer/x-foo': {
    view: 'polymer/x-foo'
  },
  '/shape': {
    view: 'shape/index'
  },
  '/sayhi': function(req, res, next) {
    console.log("hi there", req);
  },
  '/auth/twitter': function() {
    var passport = require('passport');
    var TwitterStrategy = require('passport-twitter').Strategy;

    passport.use(new TwitterStrategy({
        consumerKey: "iDlLR56w66Zmi6TkCPEcJg",
        consumerSecret: "oPi0y1kLd26PC2FXjIEwv7HgTQtQ5TxRnUBof3YjL4",
        callbackURL: "/auth/twitter/callback"
      },
      function(token, tokenSecret, profile, done) {
        console.log("logged in with twitter");
        User.findOrCreate({name: req.params('name')}, function(err, user) {
          if (err) { return done(err); }
          done(null, user);
        });
      }
    ));

    passport.authenticate('twitter');
  },
  '/auth/twitter/callback': function() {
    var passport = require('passport');
    var TwitterStrategy = require('passport-twitter').Strategy;

    passport.use(new TwitterStrategy({
        consumerKey: "iDlLR56w66Zmi6TkCPEcJg",
        consumerSecret: "oPi0y1kLd26PC2FXjIEwv7HgTQtQ5TxRnUBof3YjL4",
        callbackURL: "/auth/twitter/callback"
      },
      function(token, tokenSecret, profile, done) {
        // User.findOrCreate({name: req.params('name')}, function(err, user) {
        //   if (err) { return done(err); }
        //   done(null, user);
        // });
        console.log(profile);
        done(null, profile);
      }
    ));
    passport.authenticate('twitter', { successRedirect: '/fb2', failureRedirect: '/' });
  }

};



/**
 * (3) Action blueprints
 * These routes can be disabled by setting (in `config/controllers.js`):
 * `module.exports.controllers.blueprints.actions = false`
 *
 * All of your controllers ' actions are automatically bound to a route.  For example:
 *   + If you have a controller, `FooController`:
 *     + its action `bar` is accessible at `/foo/bar`
 *     + its action `index` is accessible at `/foo/index`, and also `/foo`
 */


/**
 * (4) Shortcut CRUD blueprints
 *
 * These routes can be disabled by setting (in config/controllers.js)
 *			`module.exports.controllers.blueprints.shortcuts = false`
 *
 * If you have a model, `Foo`, and a controller, `FooController`,
 * you can access CRUD operations for that model at:
 *		/foo/find/:id?	->	search lampshades using specified criteria or with id=:id
 *
 *		/foo/create		->	create a lampshade using specified values
 *
 *		/foo/update/:id	->	update the lampshade with id=:id
 *
 *		/foo/destroy/:id	->	delete lampshade with id=:id
 *
 */

/**
 * (5) REST blueprints
 *
 * These routes can be disabled by setting (in config/controllers.js)
 *		`module.exports.controllers.blueprints.rest = false`
 *
 * If you have a model, `Foo`, and a controller, `FooController`,
 * you can access CRUD operations for that model at:
 *
 *		get /foo/:id?	->	search lampshades using specified criteria or with id=:id
 *
 *		post /foo		-> create a lampshade using specified values
 *
 *		put /foo/:id	->	update the lampshade with id=:id
 *
 *		delete /foo/:id	->	delete lampshade with id=:id
 *
 */

/**
 * (6) Static assets
 *
 * Flat files in your `assets` directory- (these are sometimes referred to as 'public')
 * If you have an image file at `/assets/images/foo.jpg`, it will be made available
 * automatically via the route:  `/images/foo.jpg`
 *
 */



/**
 * (7) 404 (not found) handler
 *
 * Finally, if nothing else matched, the default 404 handler is triggered.
 * See `config/404.js` to adjust your app's 404 logic.
 */

