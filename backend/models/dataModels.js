const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
            required:true,
        },
        phoneNumber:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        requireMent:{
            type:String,
            required:true
        }
        
    },
    {
        timestamps:true
    }
);
const Data=mongoose.model('Data',userSchema)

module.exports=Data;