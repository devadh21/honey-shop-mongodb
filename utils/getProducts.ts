import { IProduct } from "@/typings/interfaces";
import getProductsActions   from "@/serverActions/products/getProductsActions";
// import { revalidatePath } from "next/cache";

 

export async function getProducts() {   
  const res:IProduct[] | undefined = await getProductsActions();

  if (res === undefined) throw new Error("No Products Found"); 
  // revalidatePath("/");

  return res; 
}