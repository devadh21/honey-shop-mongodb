// "use server";


// import { Types } from 'mongoose';
// import { IProduct } from "@/typings/interfaces";

// import Product from "@/app/models/Product";
// import mongodbConnect from "@/netlify/functions/mongoosedb"; 

// export default async function getProductsActions() {
//   //open db

//   const mongodb = await mongodbConnect(); 

//   try {
//     const products = await Product.find().lean(); // lean() converts Mongoose documents into plain JS objects.

//     const cleanedProducts: IProduct[] = products.map(product => ({
//       id: (product._id as Types.ObjectId).toString(),
//       name: product.name,
//       price: product.price,
//       old_price: product.old_price,
//       half_kg: product.half_kg,
//       img_url: product.img_url,
//       created_at: product.created_at?.toISOString?.(),
//       updated_at: product.updated_at?.toISOString?.(),
//       // __v: product.__v,
//     }));
    

//     return cleanedProducts;
//   } catch (error) {
//     console.log(error);
//   }
// }
