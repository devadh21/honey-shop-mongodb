import mongoose from "mongoose"

export default async function mongodbConnect() { 
    const MONGODB_URI = process.env.DATABASE_MONGO_URL;

    if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
    }   
   try {        
       await mongoose.connect(MONGODB_URI);
       console.log('MongoDB connected seccessfully');       
   } catch (error) {
       console.log("errorr",error) 
   }
} 
