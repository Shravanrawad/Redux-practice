import React from 'react';
import Products from '../componant/products';

function Home() {
  return (
    <div className='w-full max-w-5xl mx-auto p-4'>
      <h2 className='text-3xl font-bold text-center mb-6 text-gray-800'>Welcome to the Shop</h2>
      <section className='bg-white rounded-lg shadow-lg p-6'>
        <h3 className='text-2xl font-semibold mb-4 text-gray-700'>Products</h3>
        <Products />
      </section>
    </div>
  );
}

export default Home;
