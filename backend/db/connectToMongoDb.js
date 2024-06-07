import mongoose from 'mongoose';
// const MONGO_DB_URI = process.env.MONGO_DB_URI 
const connectToMongoDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB");
    }catch(error){
        console.log("Error connecting to MongoDB", error.message);
    }
};

export default connectToMongoDB;