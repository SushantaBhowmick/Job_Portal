


const sendToken = async(res,user,message,statusCode=200)=>{
    const token = user.getJWTToken();

    const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly:true,
        secure:true,
        sameSite:"None",
        withCredentials:true,
    }

    res
    .status(statusCode)
    .cookie("token",token,options)
    .json({
        success:true,
        message,
        user,
    })
}

module.exports = sendToken;