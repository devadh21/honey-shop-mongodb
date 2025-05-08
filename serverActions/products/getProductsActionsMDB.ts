"use server";


import { Types } from 'mongoose';

import Product from "@/app/models/Product";
import mongodbConnect from "@app/helpers/mongoosedb";

export default async function getProductsActions() {
  //open db

  const mongodb = await mongodbConnect();

  try {
    const products = await Product.find().lean(); // lean() converts Mongoose documents into plain JS objects.

    const cleanedProducts = products.map((product) => ({
      ...product,
      _id: (product._id as Types.ObjectId).toString(), // .toString() ensures _id (a MongoDB ObjectId) becomes a serializable string.
      created_at: product.created_at?.toISOString?.(), // .toISOString() ensures dates are serializable.
      updated_at: product.updated_at?.toISOString?.(), // .toISOString() ensures dates are serializable.
    }));
    

    return cleanedProducts;
  } catch (error) {
    console.log(error);
  }
}
