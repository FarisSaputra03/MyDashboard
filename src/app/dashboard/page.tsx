import React from "react";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";
export default function Dashboard() {
  const listProduct = [
    {
      img: "/img/kopi.jpg",
      title: "",
      name: "",
      tgl: "",
    },
  ];
  const listCategory = [
    {
      title: "Customer",
      price: "15,209",
    },
    {
      title: "Revenue",
      price: "$931,290",
    },
    {
      title: "Transactioon",
      price: "22,209,399",
    },
  ];
  return (
    <div className="m-8">
      {/* <div className='flex flex-row justify-between'>
        <h1 className='text-2xl font-medium'>Dashboard</h1>
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
      <div className="mb-20">
        {/* <p className='text-gray-400'>Look what you have made today!</p> */}
        <div className="flex justify-between pt-6">
          {listCategory.map((data: any, index) => (
            <div key={index + 1} className="flex justify-between -m-4">
              <div className="p-4 w-auto">
                <div className="border border-gray-200  p-6 rounded-lg">
                  <h2 className="flex items-center gap-1 text-lg text-gray-400 font-medium title-font mb-2">
                    {data.title}
                  </h2>
                  <div className="flex justify-center">
                    <p className="font-bold leading-relaxed text-5xl">
                      {data.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-2 mt-6 w-full">
          <div className="my-6">
            <h1 className="text-gray-900 title-font font-bold">
              Recent Transactions
            </h1>
          </div>
          <div className="h-full justify-between w-full mt-6 flex items-center border-gray-200 border p-4 rounded-lg">
            <div className="flex items-center gap-1">
              <Image width={50} height={50} src="/img/kopi.jpg" alt="" />
              <h2 className="text-gray-900 title-font font-medium">Coffe</h2>
            </div>
            <p>Angga Risky</p>
            <p>12 Januari,2023</p>
          </div>
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
