const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const { catachAsyncErrors } = require('./catchAsyncErrors');
const ErrorHandler = require('../utils/errorHandler');

exports.isAuthenticated = catachAsyncErrors(async(req,res,next)=>{
    const {token} = req.cookies;

    if(!token) return next(new ErrorHandler("Please Login to Access this resourse",401))

    const decode = jwt.verify(token,process.env.JWT_SECRET);
    req.user = await User.findById(decode.id)
    next();
})

exports.isAdmin = catachAsyncErrors(async(req,res,next)=>{

    if(req.user.role !== 'admin' && req.user.role !== "company") return next(new ErrorHandler("User not allowed to access this resourse",401));
    next();
})