const Data=require('../models/dataModels')
const asyncHandler = require('express-async-handler')


const formData=asyncHandler(async(req,res)=>{
    const {firstName,lastName,phoneNumber,email,requireMent
    } = req.body;
    const data =await Data.create({
        firstName,lastName,phoneNumber,email,requireMent

    })
    if(data){
        res.status(201).json({
            _id:data.id,
            firstName:data.firstName,
            lastName:data.lastName,
            phoneNumber:data.phoneNumber,
            email:data.eamil,
            requireMent:data.requireMent
        })
    }else{
        res.status(400)
        throw new Error('Data Occurde')
    }

  
    // res.json({
    //     firstName,lastName,phoneNumber,email,requireMent
    // })
})
module.exports = {formData}