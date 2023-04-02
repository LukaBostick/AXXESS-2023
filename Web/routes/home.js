const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', passport.authenticate('localLogin'), (req, res) => {
    res.render('home', null);
});

// export the file  into server.js and use the router instead of hard coding it
module.exports = router;