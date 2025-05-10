"use server";

import mongodbConnect from "@/netlify/functions/mongoosedb";
import { getCustomersmongodb } from "@/netlify/functions/getCustomermongodb";
import { Types } from "mongoose";
import { ICustomer } from "@/typings/interfaces";
import Customer from "@/app/models/Customer";

export const getCustomersWithPaginationMDB = async (
  searchKeyword: any,
  currentPage: any,
  itemsPerPage: any
) => {
  //Open db
  const connectMDB = await mongodbConnect();

  try {
    if (searchKeyword) {
      const regex = new RegExp(searchKeyword, "i"); // Case-insensitive partial match

      const result = await Customer.find({
        $or: [
          { full_name: regex },
          { adress: regex },
          { phone: regex },
          { product: regex },
          { quantity: regex },
          { weight: regex },
          { total_price: regex },
        ],
      }).lean();

      const cleanedcustomers: ICustomer[] = result.map((customer) => ({
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

      const data: ICustomer[] = cleanedcustomers;
      return data;
    }

    if (currentPage && itemsPerPage) {
      const offset = (currentPage - 1) * itemsPerPage;
      const result = await Customer.find()
        .skip(offset)
        .limit(itemsPerPage)
        .lean();
      const cleanedcustomers: ICustomer[] = result.map((customer) => ({
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

      const data: ICustomer[] = cleanedcustomers;
      return data;
    }

    // retrieve all products  from the database.
    const data: ICustomer[] | undefined = await getCustomersmongodb();

    return data;
  } catch (error) {
    console.log(error);
  }
};
