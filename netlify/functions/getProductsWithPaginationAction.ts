"use server";

import mongodbConnect from "@/netlify/functions/mongoosedb";
import { getProductsmongodb } from "@/netlify/functions/getProductsmongodb";
import { Types } from "mongoose";
import { IProduct } from "@/typings/interfaces";
import Product from "@/app/models/Product";


export const getProductsWithPaginationMDB = async (
  searchKeyword: any,
  currentPage: any,
  itemsPerPage: any
) => {
  //Open db
  const connectMDB = await mongodbConnect();

  try {
    if (searchKeyword) {
      const regex = new RegExp(searchKeyword, "i"); // Case-insensitive partial match

      const result = await Product.find({
        $or: [
          { name: regex },
          { price: regex },
          { old_price: regex },
          { half_kg: regex },
        ],
      }).lean();

      const cleanedProducts: IProduct[] = result.map((product) => ({
        id: (product._id as Types.ObjectId).toString(),
        name: product.name,
        price: product.price,
        old_price: product.old_price,
        half_kg: product.half_kg,
        img_url: product.img_url,
        created_at: product.created_at?.toISOString?.(),
        updated_at: product.updated_at?.toISOString?.(),
      }));

      const data: IProduct[] = cleanedProducts;
      return data;
    }

    if (currentPage && itemsPerPage) {
      const offset = (currentPage - 1) * itemsPerPage;
      const result = await Product.find()
        .skip(offset)
        .limit(itemsPerPage)
        .lean();
      const cleanedProducts: IProduct[] = result.map((product) => ({
        id: (product._id as Types.ObjectId).toString(),
        name: product.name,
        price: product.price,
        old_price: product.old_price,
        half_kg: product.half_kg,
        img_url: product.img_url,
        created_at: product.created_at?.toISOString?.(),
        updated_at: product.updated_at?.toISOString?.(),
      }));

      const data: IProduct[] = cleanedProducts;
      return data;
    }

    // retrieve all products  from the database.
    const data: IProduct[] | undefined = await getProductsmongodb();

    return data;
  } catch (error) {
    console.log(error);
  }
};
