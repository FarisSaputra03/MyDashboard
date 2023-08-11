import React from 'react';
import Image from 'next/image';
import { BsCart4 } from 'react-icons/bs';
export default function DetailsTransactions() {
  return (
    <div className='pl-64 m-8 w-full'>
      <div className='flex flex-row justify-between'>
        <h1 className='text-2xl font-medium'>#STORE0839</h1>
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
      <div className='flex gap-5 mb-20'>
        <p className='text-gray-400'>Product</p>
        <p className='text-gray-400'>/</p>
        <p className='text-gray-400 font-medium'>Details</p>
      </div>
      <div className='container gap-5 mx-auto flex px-1 py-1 md:flex-row flex-col items-center'>
        <Image width={200} height={200} src='/img/kopi.jpg' alt='' />
        <div className='flex flex-col'>
          <div className='flex gap-28'>
            <div className='pb-40'>
              <h1 className='text-gray-400 font-medium'>Customer Name</h1>
              <p className='text-black font-medium'>Angga Risky</p>
            </div>
            <div className='pb-40'>
              <h1 className='text-gray-400 font-medium'>Product Name</h1>
              <p className='text-black font-medium'>Coffe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
