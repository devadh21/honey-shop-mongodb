
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
import { getProductsMDB } from "@/utils/getProductsMDB";

import { getUsers } from "@/utils/getUsers";




export default   function Home() {
  
  // const data = await getProducts();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [productsMDB, setProductsMDB] = useState<IProduct[]>([]);


  useEffect(() => {
    
    async function fetchData() {
      // get products data from the server. 
      const data = await getProducts();
      setProducts(data);
    }
    fetchData();

    async function fetchDataP() {
      // get products data from the server. 
      const data = await getProductsMDB();
      setProductsMDB(data);
    }
    fetchDataP();
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
