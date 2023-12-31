"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Shopping() {
  const [selectedTitle, setSelectedTitle] = useState("");
  const [listFiltered, setListFiltered] = useState<any>(null);
  const listProduct = [
    {
      id: 1,
      img: "/img/pic.jpg",
      title: "Apple Watch 4",
      price: "$890",
    },
    {
      id: 2,
      img: "/img/pic (1).jpg",
      title: "Orange Bogotta",
      price: "$94,509",
    },
    {
      id: 3,
      img: "/img/pic (2).jpg",
      title: "Sofa Ternyaman",
      price: "$1,409",
    },
    {
      id: 4,
      img: "/img/pic (3).jpg",
      title: "Bubuk Maketti",
      price: "$225",
    },
    {
      id: 5,
      img: "/img/pic (4).jpg",
      title: "Tatakan Gelas",
      price: "$45,184",
    },
    {
      id: 6,
      img: "/img/pic (5).jpg",
      title: "Mavic Kawe",
      price: "$503",
    },
    {
      id: 7,
      img: "/img/pic (6).jpg",
      title: "Black Edition Nike",
      price: "$70,482",
    },
    {
      id: 8,
      img: "/img/pic (7).jpg",
      title: "Monkey Toys",
      price: "$783",
    },
  ];
  const listTrend = [
    {
      img: "/img/gadget.png",
      title: " Gadgets",
    },
    {
      img: "/img/furniture.png",
      title: " Furniture",
    },
    {
      img: "/img/make up.png",
      title: " Make Up",
    },
    {
      img: "/img/sneaker.png",
      title: " Sneaker",
    },
    {
      img: "/img/tools.png",
      title: " Tools",
    },
    {
      img: "/img/baby.png",
      title: " Baby",
    },
  ];
  const filterProduk = (title: any) => {
    const filtered = listProduct.filter((item) => item.title === title);
    setListFiltered(filtered);
  };
  useEffect(() => {
    filterProduk(selectedTitle);
  }, []);
  return (
    <div className="">
      {
        //navbar
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <div>
              <Image width={50} height={50} src="/img/bag.png" alt="" />
            </div>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <p className="mr-5 text-orange-500 hover:text-orange-900">Home</p>
            <p className="mr-5 hover:text-gray-900">Categories</p>
            <p className="mr-5 hover:text-gray-900">Rewards</p>
          </nav>
          <div className="gap-10">
            <button className="text-black inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-100 rounded text-base mt-4 md:mt-0">
              Sign Up
            </button>
            <button className="text-white inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0">
              Sign In
            </button>
          </div>
        </div>
      }
      {
        /* // Picture */
        <div className="flex justify-center  rounded-lg h-64">
          <Image width={952} height={360} src="/img/shopping.jpg" alt="" />
        </div>
      }
      {
        <div>
          <div className="container mx-auto py-10">
            <h1 className="font-bold text-lg text-black">Trend Categories</h1>
          </div>
          <div className="container  ml-8">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="grid grid-cols-2 md:grid-cols-6 ml-4 gap-20">
                {listTrend.map((data: any, index) => (
                  <div key={index + 1} className="w-36">
                    <div className="border-2 border-gray-200  py-5 rounded-lg">
                      <div className="flex justify-center">
                        <Image width={80} height={80} src={data.img} alt="" />
                      </div>
                      <h2 className="title-font font-medium text-xl text-gray-900">
                        {data.title}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }
      {
        <div>
          <div className="container mx-auto py-10">
            <h1 className="font-bold text-lg text-black">New Products</h1>
            <div className="container">
              <div className="flex flex-wrap -m-4 items-center">
                <div className="grid grid-cols-2 md:grid-cols-4">
                  {listProduct.map((data: any, index) => (
                    <div key={index + 1} className="p-4">
                      <Link href={`/shopping/detail_pilih/${data.id}`}>
                        <div>
                          <Image
                            width={420}
                            height={260}
                            src={data.img}
                            alt=""
                          />
                        </div>
                        <div className="mt-2">
                          <h2 className="text-gray-900 title-font text-lg font-medium">
                            {data.title}
                          </h2>
                          <p className="mt-1">{data.price}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
