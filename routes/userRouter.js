const express = require("express");
const { registration, login } = require("../controllers/userController");
const router = express.Router();


// register route
router.post('/register',registration);
// login route
router.post('/login',login)

module.exports = router