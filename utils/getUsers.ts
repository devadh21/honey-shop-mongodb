import { IUserMDB } from "@/typings/interfaces";
import getUsersActions   from "@/serverActions/users/getUsersActionsMDB";
// import { revalidatePath } from "next/cache";

 

export async function getUsers() {   
  const res:IUserMDB[] | undefined = await getUsersActions();

  if (res === undefined) throw new Error("No Products Found"); 
  // revalidatePath("/");

  return res; 
}