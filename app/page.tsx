"use client";

import { useEffect, useState } from "react";

import Hero from "@compo/home/Hero";
import Products from "@compo/home/Products";
import About from "@/components/home/About";
import WhyUs from "@/components/home/WhyUs";
import Services from "@/components/home/Services";
import Newslatter from "@/components/home/Newslatter";
import Chatbot from "@/components/chatbot/Chatbot";



import { IProduct } from "@/typings/interfaces";
import { getProductsMDB } from "@/netlify/functions/getProducts";

export default function Home() {
  const [productsMDB, setProductsMDB] = useState<IProduct[] | undefined>(
    undefined
  );

  useEffect(() => {
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
      <Products products={productsMDB} />
      <About />
      <WhyUs />
      <Services />
      <Newslatter />
      <Chatbot />
    </main>
  );
}
