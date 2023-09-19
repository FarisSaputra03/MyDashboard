import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function succes() {
  return (
    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div className="flex flex-col lg:w-3/5  lg:pr-0">
        <div className="lg:w-96 md:w-96 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <Image width={400} height={400} src="/img/bag blue.png" alt="" />
          <div>
            <h1 className="uppercase font-bold text-center text-gray-900 text-xl mb-8">
            Transaction Processed!
            </h1>
          </div>
          <p className="flex justify-center text-sm font-medium ">
          Silahkan tunggu konfirmasi email dari kami dan
          </p>
          <p className="flex justify-center text-xs font-medium">
          kami akan menginformasikan resi secepat mungkin!
          </p>
          <Link href={'/dashboard'}>
            <button className='w-full text-white bg-green-500 border-0 mt-5 py-2 px-8 focus:outline-none hover:bg-green-600 rounded-lg text-lg'>
              My dashboard
            </button>
          </Link>
          <Link href={"/shopping"}>
          <button className='w-full text-white bg-gray-300 border-0 mt-5 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded-lg text-lg'>
            Go to Shopping
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
