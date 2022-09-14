const express=require('express')
const {formData} = require('../controllers/dataControllers')

const router = express.Router()

router.post('/data',formData)

module.exports=router;