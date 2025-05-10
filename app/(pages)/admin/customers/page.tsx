"use client";
import Pagenation from "@/components/admi/customers/Pagenation";
import SearchBar from "@/components/admi/customers/SearchBar";
import TablesCustomers from "@/components/admi/customers/TablesCustomers";
import { getCustomersWithPaginationMDB } from "@/netlify/functions/getCustomersWithPaginationAction";

import { ICustomer } from "@/typings/interfaces";
import SelectPerPage from "@/components/admi/ui/SelectPerPage";
import Breadcrumb from "@compo/admi/ui/Breadcrumb";

import { useEffect, useState } from "react";

export default function CustomersPage({
  searchParams,
}: {
  searchParams: {
    search: string | undefined;
    page: string | string[] | undefined;
    per_page: string | string[] | undefined;
  };
}) {
  const [customers, setCustomers] = useState<ICustomer[] | undefined>(
    undefined
  );

  const { search, page, per_page } = searchParams;
  const currentPage = page ?? 1;
  const itemsPerPage = per_page ?? 5;

  useEffect(() => {
    async function fetchData() {
      // get products data from the server.
      const customerssWithPagination: ICustomer[] | undefined =
        await getCustomersWithPaginationMDB(search, currentPage, itemsPerPage); // get all products from the database.
      setCustomers(customerssWithPagination);
    }
    fetchData();
  }, [search, currentPage, itemsPerPage]);

  return (
    <div className="p-4">
      <div className="">
        <Breadcrumb />
      </div>
      <h2>All customers</h2>
      <div className=""></div>
      {/* Table all users */}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="pb-4 bg-white dark:bg-gray-900 p-2 flex justify-between">
          <div className="flex gap-2 justify-between items-center">
            <SelectPerPage page={currentPage} />
            <SearchBar />
          </div>
        </div>
        <TablesCustomers customers={customers!} />
        <Pagenation searchParams={searchParams} />
      </div>
    </div>
  );
}
