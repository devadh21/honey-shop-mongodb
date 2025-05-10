"use server";

import { Types } from "mongoose";
import { ICustomer } from "@/typings/interfaces";
import Customer from "@/app/models/Customer";

import mongodbConnect from "@/netlify/functions/mongoosedb";

export async function getCustomersmongodb() {
  const connectMDB = await mongodbConnect(); 

  try {
    const customers = await Customer.find().lean();
    const cleanedcustomers: ICustomer[] = customers.map((customer) => ({
      id: (customer._id as Types.ObjectId).toString(),
      full_name: customer.full_name,
      adress: customer.adress,
      phone: customer.phone,
      product: customer.product,
      quantity: customer.quantity,
      weight: customer.weight,    
      total_price: customer.total_price,    
      created_at: customer.created_at?.toISOString?.(),
      updated_at: customer.updated_at?.toISOString?.(),
    }));

    const res: ICustomer[] | undefined = cleanedcustomers;

    if (res === undefined) throw new Error("No customers Found");

    return res;
    
  } catch (error) {
    console.log("errorr", error);
  }
}
