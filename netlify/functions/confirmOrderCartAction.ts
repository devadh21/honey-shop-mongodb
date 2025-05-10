"use server";

import mongodbConnect from "@/netlify/functions/mongoosedb";
import Customer from "@/app/models/Customer";
import { TcustmersData, IshippingInfo, IProduct } from "@/typings/interfaces";

export const confirmOrderCartActionMDB = async (
  shippingInfo: IshippingInfo,
  productData: any
) => {
  const db = await mongodbConnect();

  const { full_name, adress, phone }: IshippingInfo = shippingInfo;

  const customer: TcustmersData[] = productData.map((pdt: IProduct) => {
    const { id, img_url, price, old_price, half_kg, ...newPdt } = pdt; // remove id,img_url,price,old_price,half_kg from pdt
    const product = { ...newPdt, full_name, adress, phone }; // add full_name,adress,phone to pdt
    return product;
  });
  ///  insert custmor to mongodb
  try {
    customer.map(async (i: any) => {
      const newCustomer = new Customer({
        full_name:i.full_name,
        adress:i.adress,
        phone:i.phone,
        product:i.name,
        quantity:i.quantity,
        weight:i.weight,
        total_price:i.total_price,
      });
      await newCustomer.save();
    });
  } catch (error) {
    console.log(error);
  }
};
