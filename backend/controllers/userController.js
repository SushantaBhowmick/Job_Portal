const { catachAsyncErrors } = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");

exports.allUsers = catachAsyncErrors(async(req,res,next)=>{

    const pageSize = 10;
    const currentPage = Number(req.query.pageNumber) || 1;
    const count = await User.find({}).estimatedDocumentCount();

    const users= await User.find()
    .sort({createdAt:-1})
    .select('-password')
    .skip(pageSize*(currentPage-1))
    .limit(pageSize);

    res.status(200).json({
        success:true,
        users,
        currentPage,
        totalPages:Math.ceil(count/pageSize),
        count
    })
    next();
})

exports.singleUser = catachAsyncErrors(async(req,res,next)=>{;

    const user= await User.findById(req.params.id)
    if(!user) return next(new ErrorHandler("User Not Found",404));
    
    res.status(200).json({
        success:true,
        user,
    })
    next()
})

exports.updateUser = catachAsyncErrors(async(req,res,next)=>{;

    const user= await User.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        useFindAndModify:false
    })
    
    res.status(200).json({
        success:true,
        user,
    })
    next();
})

exports.deleteUser = catachAsyncErrors(async(req,res,next)=>{;

    const user= await User.findByIdAndRemove(req.params.id);
    if(!user) return next(new ErrorHandler("User Not Found",404));
    
    res.status(200).json({
        success:true,
        message:"User Deleted!",
    })
})

exports.createUserJobsHistory = catachAsyncErrors(async(req,res,next)=>{;

    const {title,description,salary,location} = req.body;
    const currentUser = await User.findOne({_id:req.user._id}).select('-password');
    if(!currentUser){
        return next(new ErrorHandler("You must Login",400))
    }else{
        const addJobHistory ={
            title,
            description,
            salary,
            location,
            user:req.user._id
        }
        currentUser.jobsHistory.push(addJobHistory);
        await currentUser.save();
    }

    res.status(200).json({
        success:true,
        currentUser
    })
})
