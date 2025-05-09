"use server";
import mongoose from "mongoose";
import { Types } from "mongoose";
import { IProduct } from "@/typings/interfaces";
import Product from "@/app/models/Product";

export async function getProductsmongodb () {
  

  const MONGODB_URI = process.env.DATABASE_MONGO_URL;
  if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
  }
  try {
    await mongoose.connect(MONGODB_URI);

    const products = await Product.find().lean();
    const cleanedProducts: IProduct[] = products.map((product) => ({
      id: (product._id as Types.ObjectId).toString(),
      name: product.name,
      price: product.price,
      old_price: product.old_price,
      half_kg: product.half_kg,
      img_url: product.img_url,
      created_at: product.created_at?.toISOString?.(),
      updated_at: product.updated_at?.toISOString?.(),
    }));

    const res: IProduct[] | undefined  = cleanedProducts;

    if (res === undefined) throw new Error("No Products Found");

     return res;
  } catch (error) {
    console.log("errorr", error);
  }
};
