'use server'
import Product from "@/app/models/Product";
import mongodbConnect from "@/netlify/functions/mongoosedb";
import { revalidatePath } from "next/cache";


export const deleteProductByIdMDB =async (id:string)=>{
    //Open db
        const db = await mongodbConnect();
      

    // Delete  product with the id  from the database.
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        revalidatePath("/admin/products");  // update data  in the page /admin/products after deleting a product.
        return {'status':200,"message":"ok"}        
    } catch (error) {
        console.log(error);
    }

};