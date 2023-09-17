const { catachAsyncErrors } = require('../middleware/catchAsyncErrors');
const JobType = require('../models/jobTypeModel');
const ErrorHandler = require('../utils/errorHandler');


exports.createJobType = catachAsyncErrors(async(req,res,next)=>{

    const jobT = await JobType.create({
        jobTypeName: req.body.jobTypeName,
        user:req.user.id
    });

    res.status(201).json({
        success:true,
        jobT,
    })
})

exports.allJobType = catachAsyncErrors(async(req,res,next)=>{

    const jobT = await JobType.find();

    res.status(200).json({
        success:true,
        jobT,
    })
})

exports.deleteJobType = catachAsyncErrors(async(req,res,next)=>{

    const job = await JobType.findByIdAndRemove(req.params.id);
    if(!job) return next(new ErrorHandler("Job Type Not Found",404))

    res.status(200).json({
        success:true,
        message:"Job Type deleted successfully!"
    })
})