const express = require('express');
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const { createJob } = require('../controllers/jobsController');

const router = express.Router();

router.route('/job/create').post(isAuthenticated,isAdmin, createJob)

module.exports=router;