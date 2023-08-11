import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Page = () => {
  return (
    <div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
      <div className='flex flex-col lg:w-3/5  lg:pr-0'>
        <div className='lg:w-96 md:w-96 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
          <Image width={400} height={400} src='/img/bag blue.png' alt='' />
          <div>
            <h1 className='uppercase font-bold text-center text-gray-900 text-2xl mb-8'>
              Welcome to Shop Mart
            </h1>
          </div>
          <p className='flex justify-center font-medium '>
            Kamu sudah berhasil terdaftar
          </p>
          <p className='flex justify-center font-medium'>
            bersama kami. Lets grow up now.
          </p>
          <Link href={'dashboard'}>
            <button className='w-full text-white bg-green-500 border-0 mt-5 py-2 px-8 focus:outline-none hover:bg-green-600 rounded-lg text-lg'>
              My dashboard
            </button>
          </Link>
          <button className='w-full text-white bg-gray-300 border-0 mt-5 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded-lg text-lg'>
            Go to Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
