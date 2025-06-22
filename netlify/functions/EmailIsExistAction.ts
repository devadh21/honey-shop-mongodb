"use server";

import User from "@/app/models/User";
import mongodbConnect from "@/netlify/functions/mongoosedb";

export const  EmailIsExistAction = async (email:string) =>{
       //Open db
       const db = await mongodbConnect();

       // finding email is exist in the database.
       try {
        const result =  await User.findOne({ email }).lean();;
        if(result){
            return result;
            } 
        return false;         
       } catch (error) {
         console.log(error);
       } 

}
