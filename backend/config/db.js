const mongoose = require("mongoose")

const connectDB=async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB connected:${conn.connection.port}`);
    } catch (error) {
        console.error(`Error:${error.message}`)
        process.exit();
    }
}

module.exports = connectDB