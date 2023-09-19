"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Sidebar() {
  const listBar = [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "My Products",
      href: "/dashboard/myproducts",
    },
    {
      title: "Transactions",
      href: "/dashboard/transactions",
    },
    {
      title: "Store Settings",
      href: "/dashboard/storesettings",
    },
    {
      title: "My Account",
      href: "/dashboard/myaccount",
    },
  ];
  return (
    <div className="bg-slate-500">
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-100 text-gray-800">
        <div className="shadow-md flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
          <div className="flex m-8 items-center justify-center h-14 ">
            <Image width={60} height={60} src="/img/bag.png" alt="" />
          </div>
          <div className="overflow-y-auto overflow-x-hidden flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
              <li className="px-5">
                <div className="flex flex-row items-center h-8"></div>
              </li>
              <li>
                {listBar.map((data: any, index) => (
                  <a
                    key={index + 1}
                    href={data.href}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-400 hover:text-gray-600 border-l-4 border-transparent hover:border-green-500 pr-6">
                    <span className="ml-2 font-medium text-sm tracking-wide truncate">
                      {data.title}
                    </span>
                  </a>
                ))}
              </li>

              <li className="pt-40">
                <div className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500 pr-6">
                  <Link href={"/"}>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Sign Out
                    </span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
