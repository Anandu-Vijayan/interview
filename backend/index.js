const express =require('express')
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const dataUsers = require('./routers/dataUsers')
const cors = require('cors')



const app=express();
dotenv.config()
connectDB();
app.use(express.json());
app.use(cors())

app.use('/',dataUsers)

const PORT=process.env.PORT;

app.listen(PORT,console.log(`server connected ${PORT}`));  