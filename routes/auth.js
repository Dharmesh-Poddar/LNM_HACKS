const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');


app.get("/login", (req, res) => {
    res.render("login");
});


router.post('/login', passport.authenticate('local', {
    successRedirect: '/index',
    failureRedirect: '/login'
}), function (req, res) {

});


app.get("/signup", (req, res) => {
    res.render("signup");
});


router.post('/signup', function (req, res) {
    User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
        if (err) {
            req.flash("error", err.message);
            return res.redirect('/signup');
        }
        passport.authenticate('local')(req, res, function () {
            req.flash("success", "Welcome " + user.username);
            res.redirect('/index');
        });
    });
});


router.get('/logout', function (req, res) {
    req.logout();
    req.flash("success", "Logged you out!");
    res.redirect('/landing');
});

module.exports = router;