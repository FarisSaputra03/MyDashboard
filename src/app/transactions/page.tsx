"use client";
import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
export default function Transactions() {
  const [selectedTitle, setSelectedTitle] = useState("Sell Product");
  return (
    <div className=" m-8">
      {/* <div className='flex flex-row justify-between'>
        <h1 className='text-2xl font-medium'>Transactions</h1>
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
      {/* <div className='mb-20'>
        <p className='text-gray-400'>Big result start from the small one</p>
      </div> */}
      <div className="flex flex-row text-center w-full mb-5">
        <div className="mt-1">
          <nav
            className="-mb-0.5 flex justify-center  space-x-6"
            aria-label="Tab"
            role="tablist">
            <button
              onClick={() => {
                setSelectedTitle("Sell Product");
              }}
              type="button"
              className={`font-medium px-5 rounded-lg  hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap  ${
                selectedTitle == "Sell Product"
                  ? "bg-gray-400 text-black"
                  : "bg-gray-100 text-black"
              }  active`}
              id="horizontal-alignment-item-1"
              data-hs-tab="#horizontal-alignment-1"
              aria-controls="horizontal-alignment-1"
              role="tab">
              Sell Product
            </button>
            <button
              onClick={() => {
                setSelectedTitle("Buy Product");
              }}
              type="button"
              className={`font-medium px-5 rounded-lg  hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap  ${
                selectedTitle == "Buy Product"
                  ? "bg-gray-400 text-black"
                  : "bg-gray-100 text-black"
              }  active`}
              id="horizontal-alignment-item-1"
              data-hs-tab="#horizontal-alignment-1"
              aria-controls="horizontal-alignment-1"
              role="tab">
              Buy Product
            </button>
          </nav>
        </div>
      </div>
      <div>
        <div className="p-2 mt-6 w-full">
          <Link href="/detailstrasactions">
            <div className="h-full justify-between w-full mt-6 flex items-center border-gray-200 border p-4 rounded-lg">
              <div className="flex items-center gap-1">
                <Image width={50} height={50} src="/img/kopi.jpg" alt="" />
                <h2 className="text-gray-900 title-font font-medium">Coffe</h2>
              </div>
              <p>Angga Risky</p>
              <p>12 Januari,2023</p>
            </div>
          </Link>

          <div className="h-full justify-between w-full mt-6 flex items-center border-gray-200 border p-4 rounded-lg">
            <div className="flex items-center gap-1">
              <Image width={50} height={50} src="/img/topi.jpg" alt="" />
              <h2 className="text-gray-900 title-font font-medium">Topi</h2>
            </div>
            <p>Mushasi</p>
            <p>11 Januari,2023</p>
          </div>
          <div className="h-full justify-between w-full mt-6 flex items-center border-gray-200 border p-4 rounded-lg">
            <div className="flex items-center gap-1">
              <Image width={50} height={50} src="/img/sepatu.jpg" alt="" />
              <h2 className="text-gray-900 title-font font-medium">Sepatu</h2>
            </div>
            <p>Tsukasa</p>
            <p>11 January, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
