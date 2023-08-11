import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Login = () => {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
        <div className='lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0'>
          <Image width={720} height={720} src='/img/user.jpg' alt='' />
        </div>
        <div className='lg:w-2/6 md:w-1/2  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
            <div>
            <h1 className='title-font font-medium text-3xl text-gray-900 mb-8'>
            Selamat Datang di Shop Mart
          </h1>
            </div>
          <div className='relative mb-4'>
            <label className='email leading-7 text-sm text-gray-600'>
              Email Address
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full bg-white rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label className='full-name leading-7 text-sm text-gray-600'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='pasword'
              className='w-full bg-white rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <Link href={'welcome'}>
          <button className='w-full text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded-lg text-lg'>
            Sign In to My Account
          </button>
          </Link>
          <Link href={'signup'}>
          <button className='w-full text-white bg-gray-300 border-0 mt-5 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded-lg text-lg'>
            Sign Up
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
