"use server";
import NewsLatter from '@/app/models/NewsLatter';
import mongodbConnect from "@/netlify/functions/mongoosedb";


export default async function newsLatterActionMDB(email:String) {
  //Open db
  const db = await mongodbConnect();
  

      try {
        const newsLatter = await NewsLatter.create({email});       
  
        return { status: 200, message: "ok" };
      } catch (error) {
        console.log(error);
      }


}
