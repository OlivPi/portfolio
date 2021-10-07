var express = require('express');
var app = express();
const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const ClientId = process.env.GOOGLE_CLIENT_ID;
const ClientSecret = process.env.GOOGLE_CLIENT_SECRET;

passport.use(new GoogleStrategy({
    clientID: ClientId,
    clientSecret: ClientSecret,
    callbackURL: "http://localhost:3001/auth/google/callback",
    passReqToCallback : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });