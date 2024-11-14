const mongoose=require("mongoose");

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.URL);
        console.log("Connected to MongoDb server")
    } catch (error) {
        console.log(error);
    }
}

module.exports=connectDB;