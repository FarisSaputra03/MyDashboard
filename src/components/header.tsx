import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface HeaderProps {
  onClick: () => void;
}
const Header = (props:Partial<HeaderProps>) => {
  const {onClick=()=>{}}=props;
  return (
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex  p-5 flex-col md:flex-row items-center'>
        <nav className='container flex justify-between px-4 py-8 mx-auto bg-white'>
          <div>
            <Image width={50} height={50} src='/img/bag.png' alt='' />
          </div>
          <div className='hidden space-x-8 sm:flex'>
          
            <a href='/'>Home</a>
            <a href='#'>Categories</a>
            <a href='#'>Rewards</a>
            
          </div>
          <div className='flex sm:hidden' onClick={onClick}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
