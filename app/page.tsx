"use client";

import { useEffect, useState } from "react";

import Hero from "@compo/home/Hero";
import Products from "@compo/home/Products";
import About from "@/components/home/About";
import WhyUs from "@/components/home/WhyUs";
import Services from "@/components/home/Services";
import Newslatter from "@/components/home/Newslatter";

import { IProduct } from "@/typings/interfaces";
import { getProducts } from "@/utils/getProducts";
// import { getProductsMDB } from "@/utils/getProductsMDB";
// import { getProductsMDB } from "@/netlify/functions/getProductsMDB";
import { getProductsmongodb } from "@/netlify/functions/getProductsmongodb";

export default function Home() {
  const [productsMDB, setProductsMDB] = useState<IProduct[] | undefined>(
    undefined
  );

  useEffect(() => {
    async function fetchDataP() {
      // get products data from the server.
      const data = await getProductsmongodb();
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
    </main>
  );
}
