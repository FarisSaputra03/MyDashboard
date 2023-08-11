import React from 'react';
import Image from 'next/image';
import { BsCart4 } from 'react-icons/bs';
export default function MyProducts() {
  const listProduct = [
    {
      img: '/img/kopi.jpg',
      title: 'Coffe',
      description: 'Foods',
      href: '/details',
    },
    {
      img: '/img/sepatu.jpg',
      title: 'Sepatu',
      description: 'Fashion',
      href: '',
    },
    {
      img: '/img/topi.jpg',
      title: 'Topi',
      description: 'Fashion',
      href: '',
    },
    {
      img: '/img/kemasan.jpg',
      title: 'Kemasan Coffe',
      description: 'Foods',
      href: '',
    },
    {
      img: '/img/sarung.jpg',
      title: 'Kain Sarung',
      description: 'Fashion',
      href: '',
    },
    {
      img: '/img/kaos kaki.jpeg',
      title: 'Kaus Kaki',
      description: 'Fashion',
      href: '',
    },
    {
      img: '/img/jam.jpg',
      title: 'Jam tangan Pria/Wanita',
      description: 'Fashion',
      href: '',
    },
  ];
  return (
    <div className='pl-64 m-8 w-full'>
      <div className='flex flex-row justify-between'>
        <h1 className='text-2xl font-medium'>My Products</h1>
        <div className='flex gap-5 flex-row'>
          <div>
            <Image width={50} height={50} src='/img/human.jpeg' alt='' />
          </div>
          <h1 className='text-black font-medium'>Hi, User</h1>
          <p>
            <BsCart4 size='2rem' />
          </p>
        </div>
      </div>
      <div className='mb-20'>
        <p className='text-gray-400'>Manage it well and get money</p>
        <div>
          <button
            type='button'
            className='text-white bg-green-500 border-0 mt-6 py-2 px-8 focus:outline-none hover:bg-green-600 rounded-lg text-lg'
          >
            Add New Product
          </button>
        </div>
      </div>

      <div className='grid grid-cols-6 gap-4'>
        {listProduct.map((data: any, index) => (
          <a key={index + 1} href={data.href} className='p-10 w-64'>
            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
              <div className='h-36 w-full relative '>
                <Image fill src={data.img} alt='' />
              </div>
              <div className='p-6'>
                <h1 className='title-font text-lg font-bold text-gray-900 mb-3'>
                  {data.title}
                </h1>
                <p className='leading-relaxed text-gray-400 mb-3'>
                  {data.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
