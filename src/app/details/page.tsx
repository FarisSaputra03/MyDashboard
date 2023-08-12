import React from "react";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";
export default function Details() {
  return (
    <div className=" m-8 w-full">
      {/* <div className='flex flex-row justify-between'>
        <h1 className='text-2xl font-medium'>Coffe</h1>
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
      <div className="flex gap-1 mb-20">
        <p className="text-gray-400">Product</p>
        <p className="text-gray-400 font-medium">Details</p>
      </div>
      <div className="grid gap-x-5 gap-y-4 grid-cols-3  pt-6">
        <div className="relative mb-4">
          <label className="name leading-7 text-sm text-gray-600">
            Product Name
          </label>
          <input
            type="name"
            id="name"
            name="name"
            className="w-full bg-white rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Product Name"
          />
        </div>
        <div className="relative mb-4">
          <label className="price leading-7 text-sm text-gray-600">Price</label>
          <input
            type="Price"
            id="Price"
            name="Price"
            className="w-full bg-white rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="$"
          />
        </div>
      </div>
      <div>
        <div className="relative mb-4">
          <label className="category block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Category
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="Store Name">
            <option selected>Shopping</option>
            <option value="Fs">Foods</option>
            <option value="Dk">Drink</option>
            <option value="Fn">Fashion</option>
          </select>
        </div>
      </div>
      <div>
        <div className="relative mb-4">
          <label className="description leading-7 text-sm text-gray-600">
            Description
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            placeholder="Description"></textarea>
        </div>
      </div>
      <div className="">
        <button
          type="button"
          className="w-full text-white bg-green-500 border-0 mt-5 py-2 px-8 focus:outline-none hover:bg-green-600 rounded-lg text-lg">
          Update Products
        </button>
      </div>
      <div className="flex justify-center mt-5 min-w-full py-2 px-8">
        <Image width={1200} height={500} src="/img/new.png" alt="" />
      </div>
      <button
        type="button"
        className="w-full text-white bg-gray-500 border-0 mt-5 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded-lg text-lg">
        Add Photo
      </button>
    </div>
  );
}
