const express = require('express');
const { isAuthenticated, isAdmin, isCompany } = require('../middleware/auth');
const { createJob, singleJob, updateJob, showJobs } = require('../controllers/jobsController');

const router = express.Router();

router.route('/job/create').post(isAuthenticated,isCompany,createJob)
router.route('/job/:id').get(singleJob)
router.route('/job/:id').put(isAuthenticated,isCompany, updateJob)
router.route('/jobs/show').get(showJobs)

module.exports=router;