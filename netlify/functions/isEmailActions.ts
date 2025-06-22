"use server";
import NewsLatter from "@/app/models/NewsLatter";

import mongodbConnect from "@/netlify/functions/mongoosedb";

export default async function isEmailActions(email:string) {
  //Open db
  const db = await mongodbConnect();

  try {
    const res  = await NewsLatter.findOne({ email }).lean(); 
    if (res === undefined) throw new Error("No Email Found");
    if (res === null) throw new Error("No Email Found");    

    return { status: 200, message: "ok", isEmail: !!res }; // data return true  if email exist or false if email not exist.
  } catch (error) {
    console.log(error);
  }
}
