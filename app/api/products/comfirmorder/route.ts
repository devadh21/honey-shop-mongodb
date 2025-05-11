import { NextRequest, NextResponse } from "next/server";
// import dbConnect from "@app/helpers/sqliteDb";
import mongodbConnect from "@/netlify/functions/mongoosedb";
import Customer from "@/app/models/Customer";

type custmersData = {
  full_name: string;
  adress: string;
  phone: string;
  product: string;
  quantity: number;
  weight: number;
  total_price: number;
};

export async function POST(req: NextRequest, res: NextResponse) {
  console.log("testtttttttttttttttttt")
    
  // open db
  const db = await mongodbConnect();
  const {
    full_name,
    adress,
    phone,
    product,
    quantity,
    weight,
    total_price,
  }: custmersData = await req.json();
//   console.log("customerrrrrrrrrrrrrrrr",full_name, adress, phone, product, quantity, weight, total_price);
//   console.log("testtttttttttttttttttt")

  try {
    // await db.run(
    //     'INSERT INTO customers (full_name,adress,phone,product,quantity,weight,total_price)  VALUES(?,?,?,?,?,?,?)',
    //     [full_name,adress,phone,product,quantity,weight,total_price]
    // )
    // await db.close();

    // const newCustomer = new Customer({
    //   full_name,
    //   adress,
    //   phone,
    //   product,
    //   quantity,
    //   weight,
    //   total_price,
    // });
    // await newCustomer.save();

    return NextResponse.json({ stuts: 201, message: "ok" });
  } catch (error) {
    console.log(error);
  }
}
