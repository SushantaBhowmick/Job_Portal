const express = require('express');
const { createJobType, allJobType, deleteJobType, updateJobType } = require('../controllers/jobTypeController');
const { isAuthenticated, isAdmin, isCompany } = require('../middleware/auth');

const router = express.Router();

router.route('/type/create').post(isAuthenticated,isCompany,createJobType)
router.route('/type/jobs').get(allJobType)
router.route('/type/:id').put(isAuthenticated,isCompany,updateJobType)
router.route('/type/:id').delete(isAuthenticated,isAdmin,deleteJobType)

module.exports=router;