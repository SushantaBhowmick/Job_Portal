const { catachAsyncErrors } = require('../middleware/catchAsyncErrors');
const JobType = require('../models/jobTypeModel');


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