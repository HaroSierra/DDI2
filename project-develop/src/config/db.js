import mongoose from "mongoose";

const MONGO_URL = 'mongodb://localhost:27017/project';

export const connectDB = async () =>{
    try{
        await mongoose.connect(MONGO_URL);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("connect mongoDB");
    }catch (err){
        console.log(err);
    }
};
