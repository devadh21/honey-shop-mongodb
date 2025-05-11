"use server";

import { Types } from "mongoose";
import Product from "@/app/models/Product";
import { IProduct } from "@/typings/interfaces";


import mongodbConnect from "@/netlify/functions/mongoosedb";

export async function getProductByIdMDB(id: string | undefined) {
  const connectMDB = await mongodbConnect();

  try {
    const product : IProduct | null   = await Product.findById(id);





    // const cleanedProduct: IProduct[] | null = product.map((pdt) => ({
    //   id: (pdt._id as Types.ObjectId).toString(),
    //   name: pdt.name,
    //   price: pdt.price,
    //   old_price: pdt.old_price,
    //   half_kg: pdt.half_kg,
    //   img_url: pdt.img_url,
    //   created_at: pdt.created_at?.toISOString?.(),
    //   updated_at: pdt.updated_at?.toISOString?.(),
    // }));

    // console.log("first",cleanedProduct)



    // const product: IProduct[] | undefined = cleanedProduct;
    

    if (product === undefined) throw new Error("No Products Found");
    if (product === null) throw new Error("No Products Found");


  

    return product;
  } catch (error) {
    console.log("errorr", error);
  }
}
