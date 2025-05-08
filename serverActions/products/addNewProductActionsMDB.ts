"use server";

import Product from '@/app/models/Product';
import mongodbConnect from "@app/helpers/mongoosedb";


export  const addNewProduct = async (name: string, price: string, old_price: string,half_kg: string,img_url: string) => {  

    //Open db
    const mongodb = await mongodbConnect();   

    try {
      const body = {name,price,old_price,half_kg,img_url}
      const user = await Product.create(body);

      return { status: 200, message: "ok" };
    } catch (error) {
      console.log(error);
    }
  };