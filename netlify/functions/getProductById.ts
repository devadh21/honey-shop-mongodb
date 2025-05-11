"use server";

import { Types } from "mongoose";
import Product from "@/app/models/Product";

import mongodbConnect from "@/netlify/functions/mongoosedb";

export async function getProductByIdMDB(id: string | undefined) {
  const connectMDB = await mongodbConnect();

  try {
    const product = await Product.findById(id);

    if (product === undefined) throw new Error("No Products Found");

    return product;
  } catch (error) {
    console.log("errorr", error);
  }
}
