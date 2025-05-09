"use client";
import Pagenation from "@/components/admi/products/Pagenation";
import SearchBar from "@/components/admi/products/SearchBar";
import AddNewProduct from "@/components/admi/products/AddNewProduct";
import TablesProducts from "@/components/admi/products/TablesProducts";

import { getProductsWithPaginationMDB } from "@/netlify/functions/getProductsWithPaginationAction";

import { IProduct } from "@/typings/interfaces";
import SelectPerPage from "@/components/admi/ui/SelectPerPage";
import Breadcrumb from "@compo/admi/ui/Breadcrumb";

import { useEffect, useState } from "react";

export default function ProductsPage({
  searchParams,
}: {
  searchParams: {
    search: string | undefined;
    page: string | string[] | undefined;
    per_page: string | string[] | undefined;
  };
}) {
  const [products, setProducts] = useState<IProduct[] | undefined>(undefined);

  const { search, page, per_page } = searchParams;
  const currentPage = page ?? 1;
  const itemsPerPage = per_page ?? 5;

  useEffect(() => {
    async function fetchData() {
      // get products data from the server.

      const productsWithPaginationMDB: IProduct[] | undefined =
        await getProductsWithPaginationMDB(search, currentPage, itemsPerPage);

      setProducts(productsWithPaginationMDB);
    }
    fetchData();
  }, [search, currentPage, itemsPerPage]);

  return (
    <div className="p-4">
      <div className="">
        <Breadcrumb />
      </div>
      <h2>All users</h2>
      <div className=""></div>
      {/* Table all users */}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="pb-4 bg-white dark:bg-gray-900 p-2 flex justify-between">
          <div className="flex gap-2 justify-between items-center">
            <SelectPerPage page={currentPage} />
            <SearchBar />
          </div>

          <AddNewProduct />
        </div>
        <TablesProducts products={products!} />
        <Pagenation searchParams={searchParams} />
      </div>
    </div>
  );
}
