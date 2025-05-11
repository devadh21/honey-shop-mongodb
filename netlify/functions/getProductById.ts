"use server";


import Product from "@/app/models/Product";
import { IProduct } from "@/typings/interfaces";
import mongodbConnect from "@/netlify/functions/mongoosedb";

export async function getProductByIdMDB(id: string |string[] | undefined) {
  const connectMDB = await mongodbConnect();

  try {
    const product  = await Product.findById(id).lean<IProduct>(); 

    if (product === undefined) throw new Error("No Products Found");
    if (product === null) throw new Error("No Products Found");

    const cleanedProduct: IProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      old_price: product.old_price,
      half_kg: product.half_kg,
      img_url: product.img_url,
      created_at: product.created_at,
      updated_at: product.updated_at,
    };
    
    const res: IProduct | undefined = cleanedProduct;


    return cleanedProduct;
  } catch (error) {
    console.log("errorr", error);
  }
}
