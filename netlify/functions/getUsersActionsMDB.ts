'use server'
import User from '@/app/models/User';
import mongodbConnect from "@/netlify/functions/mongoosedb";


export default async function  getUsersActions() {
  //open db
  const mongodb = await mongodbConnect();
  try {
    const users = await User.find();
    return users
    
  } catch (error) {
    console.log(error);
  } 
}
 