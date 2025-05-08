"use server";

import User from '@/app/models/User';
import mongodbConnect from "@app/helpers/mongoosedb";


export  const addNewUser = async (user_name: string, email: string, password: string) => {  

    //Open db
    const mongodb = await mongodbConnect();   

    try {
      const body = {user_name,email,password}
      const user = await User.create(body);

      return { status: 200, message: "ok" };
    } catch (error) {
      console.log(error);
    }
  };