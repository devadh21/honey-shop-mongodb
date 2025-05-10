"use server";

import mongodbConnect from "@/netlify/functions/mongoosedb";
import Customer from "@/app/models/Customer";
import { revalidatePath } from "next/cache";

export const deleteCustomrByIdMDB = async (id: string) => {
  //Open db
  const connectMDB = await mongodbConnect();

  // Delete  product with the id  from the database.
  try {
    const deletedProduct = await Customer.findByIdAndDelete(id);
    revalidatePath("/admin/customers"); // update data  in the page /admin/products after deleting a product.
    return { status: 200, message: "ok" };
  } catch (error) {
    console.log(error);
  }
};
