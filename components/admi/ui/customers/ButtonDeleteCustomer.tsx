"use client"

import { ICustomer } from "@/typings/interfaces";


export default function ButtonDeleteCustomer({
  setCustomer,
  customer,
  setShowModalDelete

}: {
  setCustomer: any;
  customer: ICustomer;
  setShowModalDelete:any
}) {
  const handleDelete = (customer: ICustomer) => {
    setCustomer(customer)
    setShowModalDelete(true)
  };

  return (
    <button
      type="button"
      onClick={() => handleDelete(customer)}
      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    >
      Delete
    </button>
  );
}
