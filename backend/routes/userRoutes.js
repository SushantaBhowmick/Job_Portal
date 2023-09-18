const express = require('express');
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const { allUsers, singleUser, updateUser, deleteUser, createUserJobsHistory } = require('../controllers/userController');
const router = express.Router();

//User routes

router.route('/allusers').get(isAuthenticated,isAdmin,allUsers);
router.route('/user/:id').get(isAuthenticated,isAdmin,singleUser);
router.route('/user/:id').put(isAuthenticated,updateUser);
router.route('/user/:id').delete(isAuthenticated,isAdmin,deleteUser);
router.route('/user/jobhistory').post(isAuthenticated,createUserJobsHistory);



module.exports = router;