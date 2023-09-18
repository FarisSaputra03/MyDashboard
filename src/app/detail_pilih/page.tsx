import React from "react";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";
export default function Detail_Pilih() {
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
                <Image width={50} height={50} src="/img/human.jpeg" alt="" />
              </div>
              <h1 className="text-black font-medium">Hi, User</h1>
              <p>
                <BsCart4 size="2rem" />
              </p>
            </div>
          </div>
        </div>
      }
      {
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="rounded-lg">
              <Image width={1000} height={400} src="/img/pic (2).jpg" alt="" />
              </div>
              <div className="flex justify-between py-5">
                <div>
                <h1 className="text-black text-xl font-semibold">Sofa Ternyaman</h1>
                <p>By Galih Pratama</p>
                </div>
                <p></p>
                <button className="text-white inline-flex items-center bg-green-500 border-0 py-2 px-10 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0">
                    Add to Cart
                </button>
              </div>
              <div>
                <p className="text-orange-500 hover:text-orange-900 font-semibold">$1,409</p>
              </div>
            </div>
          </div>
        </section>
      }
    </div>
  );
}
