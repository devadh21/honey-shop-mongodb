"use server";

import Product from "@/app/models/Product";
import mongodbConnect from "@/netlify/functions/mongoosedb";



export  const addNewProductMDB = async (formdata: FormData) => {     
    const name = formdata.get("name") as string;
    const price = formdata.get("price") as string;
    const old_price = formdata.get("old_price") as string;
    const half_kg = formdata.get("half_kg") as string;
    const img_url = formdata.get("img_url") as string;

    //Open db
    const db = await mongodbConnect();
    
    try {
      const newProduct = new Product({name, price, old_price, half_kg, img_url}) 
      await newProduct.save();
      
      return { status: 200, message: "ok" };
    } catch (error) {
      console.log(error);
    }
  };