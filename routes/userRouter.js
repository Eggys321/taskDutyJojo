const express = require("express");
const { registration, login, isLoggedIn } = require("../controllers/userController");
const router = express.Router();


// register route
router.post('/register',registration);
// login route
router.post('/login',login)
// isLoggedIn route
router.get('/isloggedin',isLoggedIn)

module.exports = router