const mongoose = require('mongoose')

// the method which is used to create schema is known as schema method

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    contact:{type:String,required:true},
    otp:{type:String,required:false},
    role:{
        type:String,
        enum:['Student','Trainer','Counsellor','Admin'],
        default:'Student'
    }
})

const User = mongoose.model('User',userSchema);
module.exports= User