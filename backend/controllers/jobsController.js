const { catachAsyncErrors } = require('../middleware/catchAsyncErrors');
const Job = require('../models/jobModel');
const ErrorHandler = require('../utils/errorHandler');


exports.createJob = catachAsyncErrors(async(req,res,next)=>{

    const job = await Job.create({
        title: req.body.title,
        description: req.body.description,
        salary: req.body.salary,
        location: req.body.location,
        jobType: req.body.jobType,
        user:req.user.id
    });

    res.status(201).json({
        success:true,
        job,
    })
})


exports.singleJob = catachAsyncErrors(async(req,res,next)=>{

    const job = await Job.findById(req.params.id);
    if(!job) return next(new ErrorHandler(`Job not found`))

    res.status(200).json({
        success:true,
        job,
    })
})

exports.updateJob = catachAsyncErrors(async(req,res,next)=>{

    const job = await Job.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        useFindAndModify:false,
    }).populate("jobType",'jobTypeName').populate('user','name');
    

    res.status(200).json({
        success:true,
        job,
    })
})
