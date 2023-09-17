const { catachAsyncErrors } = require('../middleware/catchAsyncErrors');
const Job = require('../models/jobModel');


exports.createJob = catachAsyncErrors(async(req,res,next)=>{

    const job = await JobType.create({
        title: req.body.title,
        description: req.body.description,
        salray: req.body.title,
        location: req.body.location,
        jobType: req.body.jobType,
        user:req.user.id
    });

    res.status(201).json({
        success:true,
        job,
    })
})
