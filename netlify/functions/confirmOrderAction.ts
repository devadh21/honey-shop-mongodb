"use server";

import mongodbConnect from "@/netlify/functions/mongoosedb";
import Customer from "@/app/models/Customer";
import { IOrderSummaryData, IConfirmOrderData } from "@/typings/interfaces";

export const confirmOrderActionMDB = async (
  confirmOrderData2: IConfirmOrderData,
  OrderSummaryData: IOrderSummaryData
) => {
  const db = await mongodbConnect();
  const { product, quantity, weight, total_price } = OrderSummaryData      
  const { full_name, adress, phone } = confirmOrderData2
  try {
    const newCustomer = new Customer({
      full_name,
      adress,
      phone,
      product,
      quantity,
      weight,
      total_price,
    });
    await newCustomer.save();
  } catch (error) {
    console.log(error);
  }
};
