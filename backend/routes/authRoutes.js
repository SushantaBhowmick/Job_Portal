const express = require('express');
const { signIn, signUp, logout, userProfile } = require('../controllers/authController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const router = express.Router();

//auth routes
router.route('/signup').post(signUp)
router.route('/signin').post(signIn)
router.route('/logout').get(logout)
router.route('/me').get(isAuthenticated, userProfile);



module.exports = router;