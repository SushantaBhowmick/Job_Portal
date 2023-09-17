const express = require('express');
const { createJobType, allJobType, deleteJobType } = require('../controllers/jobTypeController');
const { isAuthenticated, isAdmin, isCompany } = require('../middleware/auth');

const router = express.Router();

router.route('/type/create').post(isAuthenticated,isCompany,createJobType)
router.route('/type/jobs').get(allJobType)
router.route('/type/:id').delete(isAuthenticated,isAdmin,deleteJobType)

module.exports=router;