import React from 'react';
import { BsCart4 } from 'react-icons/bs';
import Image from 'next/image';
export default function StoreSettings() {
  return (
    <div className='pl-64 m-8 w-full'>
      <div className='flex flex-row justify-between'>
        <h1 className='text-2xl font-medium'>Store Settings</h1>
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
        <p className='text-gray-400'>Make store that profitable</p>
      </div>
      <div className='grid gap-x-5 gap-y-4 grid-cols-3  pt-6'>
        <div className='relative mb-4'>
          <label className='email leading-7 text-sm text-gray-600'>
            Store Name
          </label>
          <input
            type='name'
            id='name'
            name='name'
            className='w-full bg-white rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            placeholder='Store Name'
          />
        </div>
        <div className='relative mb-4'>
          <label className='countries block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Category
          </label>
          <select
            id='countries'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500'
            placeholder='Store Name'
          >
            <option selected></option>
            <option value='Fs'>Foods</option>
            <option value='Dk'>Drink</option>
            <option value='Fn'>Fashion</option>
          </select>
        </div>
      </div>
      <fieldset>
        <legend>Store Status</legend>
        <p className='text-gray-300 leading-relaxed mt-1'>
          Apakah saat ini toko Anda buka?
        </p>
        <input
          id='draft'
          className='peer/draft'
          type='radio'
          name='status'
          defaultChecked
        />
        <label className='ml-1 draft peer-checked/draft:text-green-500'>
          Buka
        </label>

        <input
          id='published'
          className='peer/published ml-3'
          type='radio'
          name='status'
        />
        <label className='ml-1 published peer-checked/published:text-green-500'>
          Sementara Tutup
        </label>
      </fieldset>
      <div className='mt-96 h-auto flex flex-row-reverse space-x-4 space-x-reverse'>
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
