const ErrorHandler = require("../utils/errorHandler");

const errorMiddle = (err,req,res,next)=>{

    let error = {...err}
    error.message = err.message;

    if(err.name === 'CastError')
    return next(new ErrorHandler(`Response not found ${err.value}`,404))

    //MOngoose duplicate value error
    if(err.code === 11000)
    return next(new ErrorHandler(`Duplicate field ${err.value} entered`,400))

    //mongoose validation error
    if(err.name === "validationError"){
    const message = Object.values(err.errors).map(val=> ' ' + val.message);
    error = new ErrorHandler(message,400)
    }

    res.status(error.statusCode || 500).json({
        success:false,
        error:error.message || "Internal Server Error"
    })
}

module.exports = errorMiddle;