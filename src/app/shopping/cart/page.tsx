import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
export default function cart() {
  const listCart = [
    {
      img: "/img/pic (2).jpg",
      name: " Sofa Ternyaman",
      seller: "by Andi Sukka",
      price: "$1,409",
      money: "USD",
    },
    {
      img: "/img/pic (6).jpg",
      name: " Black Edition Nike",
      seller: "by BuildWith Angga",
      price: "$70,482",
      money: "USD",
    },
    {
      img: "/img/pic (4).jpg",
      name: "Tatakan Gelas",
      seller: "by Addictex",
      price: "$45,184",
      money: "USD",
    },
  ];
  return (
    <div>
      {
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <div>
              <Image width={50} height={50} src="/img/bag.png" alt="" />
            </div>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900">Categories</a>
            <a className="mr-5 hover:text-gray-900">Rewards</a>
          </nav>
          <div className="gap-10">
            <div className="flex gap-5 flex-row">
              <div>
                <Image
                  className="rounded-full"
                  width={50}
                  height={50}
                  src="/img/human.jpeg"
                  alt=""
                />
              </div>
              <h1 className="text-black font-medium">Hi, User</h1>
              <p>
                <Link href={"/shopping/cart"}>
                  <BsCart4 size="2rem" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      }
      {
        <div>
          <div className="flex justify-around py-5">
            <h1 className="text-black font-medium">Image</h1>
            <h1 className="text-black font-medium">Name & Seller</h1>
            <h1 className="text-black font-medium">Price</h1>
            <h1 className="text-black font-medium">Menu</h1>
          </div>
          {listCart.map((data: any, index) => (
            <div key={index + 1} className="flex justify-around gap-5 py-5">
              <div>
                <Image width={150} height={85} src={data.img} alt="" />
              </div>
              <h2 className="text-black">
                {data.name}
                <p className="text-gray-500 font-semibold text-sm">
                  {data.seller}
                </p>
              </h2>
              <h2>
                {data.price}
                <p className="text-gray-500 font-semibold text-sm">
                  {data.money}
                </p>
              </h2>
              <h2>
                <button className="text-white inline-flex items-center bg-move border-0 py-2 px-5 rounded text-base mt-4 md:mt-0">
                  Remove
                </button>
              </h2>
            </div>
          ))}
        </div>
      }
      {
        <div>
          <div className="container px-5 py-24 mx-auto">
            <h1 className="font-bold text-xl pb-8 text-black">
              Shipping Details
            </h1>
            <div className="flex justify-between">
              <div className="relative">
                <h1>Address 1</h1>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-black py-1 px-20 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
              <div className="relative">
                <h1>Address 2</h1>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-black py-1 px-20 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
              <div>
                <h1></h1>
              </div>
            </div>
            <div className="flex justify-between py-4">
              <div className="relative">
                <h1>Province</h1>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-black py-1 px-10 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
              <div className="relative">
                <h1>City</h1>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-black py-1 px-10 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
              <div className="relative">
                <h1>Postal Code</h1>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-black py-1 px-10 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="relative">
                <h1>Country</h1>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-black py-1 px-20 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
              <div className="relative">
                <h1>Mobile</h1>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-black py-1 px-20 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
              <div>
                <h1></h1>
              </div>
            </div>
            <div className="pt-10">
              <h2 className="font-bold text-xl pb-8 text-black">
                Payment Informations
              </h2>
              <div className="flex justify-around">
                <p className="text-black font-semibold">
                  $10
                  <p className="text-gray-500 font-semibold text-sm">
                    Country Tax
                  </p>
                </p>
                <p className="text-black font-semibold">
                  $280
                  <p className="text-gray-500 font-semibold text-sm">
                    Product Insurance
                  </p>
                </p>
                <p className="text-black font-semibold">
                  $580
                  <p className="text-gray-500 font-semibold text-sm">
                    Ship to Jakarta
                  </p>
                </p>
                <p className="text-green-500 font-semibold">
                  $392,409
                  <p className="text-gray-500 font-semibold text-sm">Total</p>
                </p>
                <Link href={"/shopping/succes"}>
                  <button className="text-white inline-flex items-center bg-green-500 border-0 py-2 px-5 rounded text-base mt-4 md:mt-0">
                    Checkout Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
