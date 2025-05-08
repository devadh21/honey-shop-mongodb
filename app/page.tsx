
"use client";

import { useEffect, useState } from "react";

import Hero from "@compo/home/Hero";
import Products from "@compo/home/Products"; 
import About from "@/components/home/About";
import WhyUs from "@/components/home/WhyUs";
import Services from "@/components/home/Services";
import Newslatter from "@/components/home/Newslatter";

import { IProduct,IUserMDB } from "@/typings/interfaces";
import { getProducts } from "@/utils/getProducts";
import { getUsers } from "@/utils/getUsers";




export default   function Home() {
  
  // const data = await getProducts();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [users, setUsers] = useState<IUserMDB[]>([]);


  useEffect(() => {
    
    async function fetchData() {
      // get products data from the server. 
      const data = await getProducts();
      setProducts(data);
    }
    fetchData();
  }, []); 



  return (
    <main className="full-screen"> 
      <Hero />
      <Products products={products} />
      <About />
      <WhyUs/>      
      <Services/>      
      <Newslatter/>      
    </main>
  );
}
