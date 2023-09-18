const { catachAsyncErrors } = require('../middleware/catchAsyncErrors');
const Job = require('../models/jobModel');
const JobType = require('../models/jobTypeModel');
const ErrorHandler = require('../utils/errorHandler');


exports.createJob = catachAsyncErrors(async (req, res, next) => {

    const job = await Job.create({
        title: req.body.title,
        description: req.body.description,
        salary: req.body.salary,
        location: req.body.location,
        jobType: req.body.jobType,
        user: req.user.id
    });

    res.status(201).json({
        success: true,
        job,
    })
})


exports.singleJob = catachAsyncErrors(async (req, res, next) => {

    const job = await Job.findById(req.params.id);
    if (!job) return next(new ErrorHandler(`Job not found`))

    res.status(200).json({
        success: true,
        job,
    })
})

exports.showJobs = catachAsyncErrors(async (req, res, next) => {

    //enable SErach query
    const keyword = req.query.keyword ? {
        title: {
            $regex: req.query.keyword,
            $options: "i"
        }
    } : {}

    //filter By category
    let ids = [];
    const jobT = await JobType.find({}, { _id: 1 });
    jobT.forEach(cat => {
        ids.push(cat._id)
    })
    let cat = req.query.cat;
    let category = cat !== '' ? cat : ids;

    //job by location;
    let locations = [];
    const jobLocation = await Job.find({}, { location: 1 })
    jobLocation.forEach(val => {
        locations.push(val.location)
    })
    let setUniqueLocation = [...new Set(locations)]
    let location = req.query.location;
    let locationFilter = location !== '' ? location : setUniqueLocation


    //enable pagination query
    const pageSize = 5;
    const currentPage = Number(req.query.pageNumber) || 1;
    // const count = await Job.find({}).estimatedDocumentCount();
    const count = await Job.find({ ...keyword, jobType: category,location:locationFilter }).countDocuments();

    const jobs = await Job.find({ ...keyword, jobType: category,location:locationFilter })
        .skip(pageSize * (currentPage - 1))
        .limit(pageSize)

    res.status(200).json({
        success: true,
        jobs,
        currentPage,
        totalPages: Math.ceil(count / pageSize),
        count,
    })
})

exports.updateJob = catachAsyncErrors(async (req, res, next) => {

    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        useFindAndModify: false,
    }).populate("jobType", 'jobTypeName').populate('user', 'name');


    res.status(200).json({
        success: true,
        job,
    })
})
