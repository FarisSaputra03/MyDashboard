import React from "react";
import Image from "next/image";
import Link from "next/link";
const Page = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="flex flex-col lg:w-3/5  lg:pr-0">
          <div className="lg:w-96 md:w-96 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <div>
              <h1 className="title-font font-medium text-3xl text-gray-900 mb-8">
                Selamat Datang di Shop Mart
              </h1>
            </div>
            <div className="relative mb-4">
              <label className="email leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="full-name"
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="email leading-7 text-sm text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="full-name leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="pasword"
                className="w-full bg-white rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div>
              <fieldset>
                <legend>Store</legend>
                <p className="text-gray-300 leading-relaxed mt-1">
                  Apakah anda juga ingin membuka toko?
                </p>
                <input
                  id="draft"
                  className="peer/draft"
                  type="radio"
                  name="status"
                  defaultChecked
                />
                <label className="ml-1 draft peer-checked/draft:text-green-500">
                  Iya, boleh
                </label>

                <input
                  id="published"
                  className="peer/published ml-1"
                  type="radio"
                  name="status"
                />
                <label className="ml-1 published peer-checked/published:text-green-500">
                  Enggak, Makasih
                </label>
              </fieldset>
              <div className="relative mb-4">
                <label className="email leading-7 text-sm text-gray-600">
                  Nama Toko
                </label>
                <input
                  type="nama-toko"
                  id="nama-toko"
                  name="nama-toko"
                  className="w-full bg-white rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label className="countries block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Category
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                  <option selected>Select Category</option>
                  <option value="Ks">Kaos</option>
                  <option value="Jt">Jacket</option>
                  <option value="Su">Sepatu</option>
                  <option value="Ti">Topi</option>
                </select>
              </div>
            </div>
            <Link href={"/"}>
              <button
                type="button"
                className="w-full text-white bg-green-500 border-0 mt-5 py-2 px-8 focus:outline-none hover:bg-green-600 rounded-lg text-lg">
                Sign In to My Account
              </button>
            </Link>
            <Link href={"/"}>
              <button
                type="button"
                className="w-full text-white bg-gray-300 border-0 mt-5 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded-lg text-lg">
                Back to Sign
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
