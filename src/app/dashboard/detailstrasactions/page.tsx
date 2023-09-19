import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";
export default function DetailsTransactions() {
  return (
    <div className=" m-5">
      {/* <div className='flex flex-row justify-between'>
        <h1 className='text-2xl font-medium'>#STORE0839</h1>
        <div className='flex gap-5 flex-row'>
          <div>
            <Image width={50} height={50} src='/img/human.jpeg' alt='' />
          </div>
          <h1 className='text-black font-medium'>Hi, User</h1>
          <p>
            <BsCart4 size='2rem' />
          </p>
        </div>
      </div> */}
      {/* <div className="flex gap-5 mb-20">
        <p className="text-gray-400">Product</p>
        <p className="text-gray-400">/</p>
        <p className="text-gray-400 font-medium">Details</p>
      </div> */}
      <div className=" gap-5 mx-auto flex px-1 py-1 md:flex-row">
        <Image width={200} height={200} src="/img/kopi.jpg" alt="" />
        <div className="flex flex-col">
          <div className="flex gap-28">
            <div className="pb-5">
              <h1 className="text-gray-400 font-medium">Customer Name</h1>
              <p className="text-black font-medium">Angga Risky</p>
            </div>
            <div className="pb-5">
              <h1 className="text-gray-400 font-medium">Product Name</h1>
              <p className="text-black font-medium">Coffe</p>
            </div>
          </div>
          <div className="flex gap-20">
            <div className="pb-5">
              <h1 className="text-gray-400 font-medium">
                Date of transactions
              </h1>
              <p className="text-black font-medium">12 Januari,2023</p>
            </div>
            <div className="pb-5">
              <h1 className="text-gray-400 font-medium">Payment Status</h1>
              <p className="text-red-500 font-medium">Pending</p>
            </div>
          </div>
          <div className="flex gap-32">
            <div className="pb-5">
              <h1 className="text-gray-400 font-medium">Total Amaount</h1>
              <p className="text-black font-medium">$280,409</p>
            </div>
            <div className="pb-5">
              <h1 className="text-gray-400 font-medium">Mobile</h1>
              <p className="text-black font-medium">+628 2023 000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6 flex flex-col">
        <h1 className="font-bold">Shopping Information</h1>
        <div className="flex pt-6 gap-24">
          <div className="pb-5">
            <h1 className="text-gray-400 font-medium">Address I</h1>
            <p className="text-black font-medium">Setra Duta Cemara</p>
          </div>
          <div className="pb-5">
            <h1 className="text-gray-400 font-medium">Address II</h1>
            <p className="text-black font-medium">Blok B2 No. 34</p>
          </div>
        </div>
        <div className="flex pt-6 gap-40">
          <div className="pb-5">
            <h1 className="text-gray-400 font-medium">Province</h1>
            <p className="text-black font-medium">West Java</p>
          </div>
          <div className="pb-5">
            <h1 className="text-gray-400 font-medium">City</h1>
            <p className="text-black font-medium">Bandung</p>
          </div>
        </div>
        <div className="flex pt-6 gap-36">
          <div className="pb-5">
            <h1 className="text-gray-400 font-medium">Postal Code</h1>
            <p className="text-black font-medium">123 999</p>
          </div>
          <div className="pb-5">
            <h1 className="text-gray-400 font-medium">Country</h1>
            <p className="text-black font-medium">Indonesia</p>
          </div>
        </div>
        <div className="mb-5">
          <label className="countries block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            Category
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-64 p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
            <option selected>Select Category</option>
            <option value="Ks">Kaos</option>
            <option value="Jt">Jacket</option>
            <option value="Su">Sepatu</option>
            <option value="Ti">Topi</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end">
      <Link href={"/transactionsucces"}>
      <button className="w-40 text-white bg-green-500 border-0 mt-5 py-2 px-8 focus:outline-none hover:bg-green-600 rounded-lg text-lg">
          Save Now
        </button>
      </Link>
      </div>
    </div>
  );
}
