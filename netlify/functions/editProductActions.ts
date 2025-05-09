"use server";

import Product from "@/app/models/Product";
import mongodbConnect from "@/netlify/functions/mongoosedb";
import { revalidatePath } from "next/cache"; 


export  const editProductMDB = async (formdata: FormData) => {    
    const id = formdata.get("product_id") as string;
    const name = formdata.get("name") as string;
    const price = formdata.get("price") as string;
    const old_price = formdata.get("old_price") as string;
    const half_kg = formdata.get("half_kg") as string;
    const img_url = formdata.get("img_url") as string; 


    //Open db
        const db = await mongodbConnect();
    

    // Delete  product with the id  from the database.
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { name, price, old_price, half_kg, img_url},
        { new: true } // return the updated document
      );

      console.log('updatedProduct',updatedProduct)
      revalidatePath("/admin/products"); // update data  in the page /admin/products after deleting a product.
      return { status: 200, message: "ok" };
    } catch (error) {
      console.log(error);
    }
  };