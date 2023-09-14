const { catachAsyncErrors } = require('../middleware/catchAsyncErrors');
const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorHandler');
const sendToken = require('../utils/sendToken');


exports.signUp= catachAsyncErrors(async(req,res,next)=>{

    const {name,email,password} = req.body;
    if(!name || !email || !password) return next(new ErrorHandler("Please Enter All Fields",400));

    const userExists = await User.findOne({email});
    if(userExists) return next(new ErrorHandler("User Already Exists",403));
    

    const user = await User.create({
        name,email,password
    })
    sendToken(res,user,"Register Successfully",201)
})


exports.signIn= catachAsyncErrors(async(req,res,next)=>{

    const {email,password} = req.body;
    if(!email || !password) return next(new ErrorHandler("Please Enter All Fields",403));

    const user = await User.findOne({email});
    if(!user) return next(new ErrorHandler("User Doesn't Exists",403));
    
    const isMatch = await user.comparePassowrd(password);
    if(!isMatch) return next(new ErrorHandler("Invalid Credential",400));

sendToken(res,user,`Welcome Back ${user.name}`,200)
})

exports.logout= catachAsyncErrors(async(req,res,next)=>{

    res.clearCookie('token',{
        expires: new Date(Date.now()),
        httpOnly:true,
        secure:true,
        sameSite:"None",
        withCredentials:true,
    })
    .status(200)
    .json({
        success:true,
        message:"Logged Out Successfully!"
    })
})


exports.userProfile= catachAsyncErrors(async(req,res,next)=>{
    const user = await User.findById(req.user.id).select('-password')
res.status(200)
.json({
    success:true,
    user
})
   
})
