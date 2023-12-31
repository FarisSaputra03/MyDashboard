'use client'
import { usePathname } from 'next/navigation'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
interface NavbarProps {
  onClick: () => void;
}

export default function Navbar(props: Partial<NavbarProps>) {
  const params = usePathname()
  const { onClick = () => {} } = props;
  // console.log("navbar")
  // console.log(params)
  const [title,setTitle] = useState("");

const changeTitle=()=>{
 if(params=="/myproducts" ){
  setTitle("My Products")
  return
 };
 if(params=="/dashboard" ){
  setTitle("Dashboard")
  return
 };
 if(params=="/transactions" ){
  setTitle("Transactions")
  return
 };
 if(params=="/storesettings" ){
  setTitle("Store Settings")
  return
 };
 if(params=="/myaccount" ){
  setTitle("My Account")
  return
 };
 if(params=="/details" ){
  setTitle("Details Product")
  return
 };
 if(params=="/detailstrasactions" ){
  setTitle("Details Transactions")
  return
 };
 if(params=="/create-product" ){
  setTitle("Create Product")
  return
 };
}

  useEffect(() => {
    changeTitle();
  });
  return (
    <div className="mx-8 mt-8 w-full">
      <div className="flex flex-row justify-between">
        <div className="flex gap-5 items-center">
          <div className="flex " onClick={onClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-medium">{
            title
          }</h1>
        </div>
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
      <div className="">
        <p className="text-gray-400">Look what you have made today!</p>
      </div>
    </div>
  );
}
