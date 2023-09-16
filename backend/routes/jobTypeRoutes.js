const express = require('express');
const { createJobType } = require('../controllers/jobTypeController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');

const router = express.Router();

router.route('/type/create').post(isAuthenticated,isAdmin, createJobType)

module.exports=router;