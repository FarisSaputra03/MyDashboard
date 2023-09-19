"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";
import { useParams } from "next/navigation";
import Link from "next/link";
export default function Detail_Pilih() {
  const params = useParams();
  const [selectProduk, setSelectProduk] = useState<any>([]);
  const listProduct = [
    {
      id:1,
      img: "/img/pic.jpg",
      title: "Apple Watch 4",
      price: "$890",
    },
    {
      id:2,
      img: "/img/pic (1).jpg",
      title: "Orange Bogotta",
      price: "$94,509",
    },
    {
      id:3,
      img: "/img/pic (2).jpg",
      title: "Sofa Ternyaman",
      price: "$1,409",
    },
    {
      id:4,
      img: "/img/pic (3).jpg",
      title: "Bubuk Maketti",
      price: "$225",
    },
    {
      id:5,
      img: "/img/pic (4).jpg",
      title: "Tatakan Gelas",
      price: "$45,184",
    },
    {
      id:6,
      img: "/img/pic (5).jpg",
      title: "Mavic Kawe",
      price: "$503",
    },
    {
      id:7,
      img: "/img/pic (6).jpg",
      title: "Black Edition Nike",
      price: "$70,482",
    },
    {
      id:8,
      img: "/img/pic (7).jpg",
      title: "Monkey Toys",
      price: "$783",
    },
  ];
  const filterProduk = (title: any) => {
    const filtered = listProduct.filter((item) => item.id.toString() === title);
    setSelectProduk(filtered[0]);
    console.log("chek");
    console.log(filtered);
  };
  useEffect(() => {
    filterProduk(params.id);
  }, []);
  console.log("check");
  console.log(params.id);
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
                width={50} height={50} src="/img/human.jpeg" alt="" />
              </div>
              <h1 className="text-black font-medium">Hi, User</h1>
              <p>
                <Link href={"/cart"}>
                <BsCart4 size="2rem" />
                </Link>
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
              <Image width={1000} height={400} src={selectProduk.img} alt="" />
              </div>
              <div className="flex justify-between py-5">
                <div>
                <h1 className="text-black text-xl font-semibold">{selectProduk.title}</h1>
                <p>By Galih Pratama</p>
                </div>
                <p></p>
                <button className="text-white inline-flex items-center bg-green-500 border-0 py-2 px-10 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0">
                    Add to Cart
                </button>
              </div>
              <div>
                <p className="text-orange-500 hover:text-orange-900 font-semibold">{selectProduk.price}</p>
              </div>
            </div>
          </div>
        </section>
      }
    </div>
  );
}
