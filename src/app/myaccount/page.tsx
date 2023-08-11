import React from 'react';
import { BsCart4 } from 'react-icons/bs';
import Image from 'next/image';
export default function MyAccount() {
  return (
    <div className='pl-64 m-8 w-full'>
      <div className='flex flex-row justify-between'>
        <h1 className='text-2xl font-medium'>My Account</h1>
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
        <p className='text-gray-400'>Update your current profile</p>
      </div>
      <div className='grid gap-x-5 gap-y-4 grid-cols-3 pt-6'>
        <div className='relative mb-4'>
          <label className='email leading-7 text-sm text-gray-600'>
            Your Name
          </label>
          <input
            type='name'
            id='name'
            name='name'
            className='w-full bg-white rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            placeholder='Your Name'
          />
        </div>
        <div className='relative mb-4'>
          <label className='email leading-7 text-sm text-gray-600'>
            Your Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='w-full bg-white rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            placeholder='Your Email'
          />
        </div>
      </div>
      <div className='grid gap-x-5 gap-y-4 grid-cols-3 pt-6'>
        <div className='relative mb-4'>
          <label className='email leading-7 text-sm text-gray-600'>
            Address 1
          </label>
          <input
            type='address'
            id='address'
            name='address'
            className='w-full bg-white rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            placeholder='Add Address'
          />
        </div>
        <div className='relative mb-4'>
          <label className='email leading-7 text-sm text-gray-600'>
            Address 2
          </label>
          <input
            type='address'
            id='address'
            name='address'
            className='w-full bg-white rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            placeholder='Add Address'
          />
        </div>
      </div>
      <div className='grid gap-x-5 gap-y-4 grid-cols-3 pt-6'>
        <div className='relative mb-4'>
          <label className='email leading-7 text-sm text-gray-600'>
            Province
          </label>
          <input
            type='province'
            id='province'
            name='province'
            className='w-full bg-white rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            placeholder='Add Province'
          />
        </div>
        <div className='relative mb-4'>
          <label className='email leading-7 text-sm text-gray-600'>City</label>
          <input
            type='city'
            id='city'
            name='city'
            className='w-full bg-white rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            placeholder='Add City'
          />
        </div>
        <div className='relative mb-4'>
          <label className='email leading-7 text-sm text-gray-600'>
            Postal Code
          </label>
          <input
            type='code'
            id='code'
            name='code'
            className='w-full bg-white rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            placeholder='Add Postal Code'
          />
        </div>
      </div>
      <div className='grid gap-x-5 gap-y-4 grid-cols-3 pt-6'>
        <div className='relative mb-4'>
          <label className='email leading-7 text-sm text-gray-600'>
            Country
          </label>
          <input
            type='country'
            id='country'
            name='country'
            className='w-full bg-white rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            placeholder='Add Country'
          />
        </div>
        <div className='relative mb-4'>
          <label className='email leading-7 text-sm text-gray-600'>
            Mobile
          </label>
          <input
            type='mobile'
            id='mobile'
            name='mobile'
            className='w-full bg-white rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            placeholder='Add Mobile'
          />
        </div>
      </div>
      <div className='mt-60 h-auto flex flex-row-reverse space-x-4 space-x-reverse'>
        <button
          type='button'
          className='w-48 text-white bg-green-500 border-0 mt-5 py-2 px-8 focus:outline-none hover:bg-green-600 rounded-lg text-lg'
        >
          Save Now
        </button>
      </div>
    </div>
  );
}
