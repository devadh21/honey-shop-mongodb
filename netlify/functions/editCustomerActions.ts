"use server";

import mongodbConnect from "@/netlify/functions/mongoosedb";
import Customer from "@/app/models/Customer";
import { revalidatePath } from "next/cache"; 


export  const editCustomerMDB = async (formdata: FormData) => {    
    const id = formdata.get("customer_id") as string;
    const full_name = formdata.get("full_name") as string;
    const adress = formdata.get("adress") as string;
    const phone = formdata.get("phone") as string;
    const product = formdata.get("product") as string;
    const quantity = formdata.get("quantity") as string; 
    const weight = formdata.get("weight") as string; 
    const total_price = formdata.get("total_price") as string; 


    //Open db
      const connectMDB = await mongodbConnect();
    
    // Delete  product with the id  from the database.
    try {
      const updatedCustomer = await Customer.findByIdAndUpdate(
        id,
        { full_name, adress, phone, product, quantity,weight,total_price},
        { new: true } // return the updated document
      );
      revalidatePath("/admin/customers"); // update data  in the page /admin/products after deleting a product.
      return { status: 200, message: "ok" };
    } catch (error) {
      console.log(error);
    }
  };