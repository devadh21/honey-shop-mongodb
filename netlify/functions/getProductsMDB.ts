import { IProduct } from "@/typings/interfaces";
// import getProductsActionsMDB   from "@/serverActions/products/getProductsActionsMDB";
import getProductsActionsMDB   from "@/netlify/functions/getProductsActionsMDB";



// import { revalidatePath } from "next/cache";

 

export async function getProductsMDB() {   
  const res:IProduct[] | undefined = await getProductsActionsMDB();

  if (res === undefined) throw new Error("No Products Found"); 
  // revalidatePath("/");

  return res; 
}