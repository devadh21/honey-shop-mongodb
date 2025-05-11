import Product from "@/app/models/Product";
import mongodbConnect from "@/netlify/functions/mongoosedb";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    
  const autho = req.headers.get("authorization");
  const token = "1234567890abcdefghijklmnopqrstuvwxyz";
  if (autho !== token)
    return NextResponse.json({ status: 401, msg: "Unauthorized" });
  // Open database
  const MDBB = await mongodbConnect();

  // Extraxt id from url by splitting the url and taking the last element
  const id = req.url.split("/").pop();


  // Retrieve product by id from MDB
  const product = await Product.findById(id);


  // Checking if product finded is found
  if (!product) return NextResponse.json({ msg: "No Products Found" });

  return NextResponse.json({ status: 200, data: product });
}
