import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'></div>
      <div className='bg-gray-100'>
        <div className='container mx-auto py-4 px-5 flex  justify-center flex-col sm:flex-row'>
          <p className='text-gray-500 text-sm text-center sm:text-left'>
            © 2023 Copyright Shop Mart. All Right Reserved
          </p>
        </div>
      </div>
      </>
  );
};

export default Footer;
