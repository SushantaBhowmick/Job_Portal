const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const validator = require('validator')
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        trim:true,
        required:[true,"enter your name"],
        minlength:[3,"name must be more than 3 chareaters"],
        maxlength:[30,"name can't be exceed 30 chareaters"],
    },
    email:{
        type: String,
        required:[true,"enter your email"],
        unique:true,
        validate: validator.isEmail
    },
    password:{
        type: String,
        trim:true,
        required:[true,"enter your password"],
        minlength:[6,"password must be more than 6 chareaters"],
    },
    role:{
        type: String,
        default:"user"
    }
},{timestamps:true})

//encrypting the password
userSchema.pre("save", async function(next){
    if(!this.isModified('password')){
        next();
    }
    this.password = await bcrypt.hash(this.password,10)
})

//comparePassword
userSchema.methods.comparePassowrd = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}


//return a jwt token
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE
    })
}

module.exports = mongoose.model("User",userSchema);