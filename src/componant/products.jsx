import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { add } from '../features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from '../features/productslice';

function Products() {
  const { data:products, status } = useSelector(state => state.products)

  const dispatch = useDispatch();

  useEffect(() => {

      dispatch(fetchproducts());
      
  }, []);

  const handleAdd = (product) => {
        dispatch(add(product));                  
  }

  if(status === 'LOADING'){
    return <div>{status}</div>
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {products.map(product => (
        <div key={product.id} className='bg-white rounded-lg shadow-md p-4'>
          <Link to={'/singleproduct/' + product.id}>
            <img src={product.image} alt={product.description} className='w-full h-60 object-cover rounded-md mb-4' />
            <h4 className='text-lg font-semibold mb-2'>{product.title}</h4>
            <p className='text-gray-600 mb-2'>{product.description.substring(0, 100)}...</p>
            <div className='flex justify-between items-center'>
              <span className='text-xl font-bold'>${product.price}</span>
              <span className='text-yellow-500'>{product.rating.rate} ⭐ ({product.rating.count})</span>
            </div>
          </Link>
          <button
            onClick={() => handleAdd(product)}
            className='mt-4 bg-violet-500 text-white py-2 px-4 rounded hover:bg-violet-600 transition duration-300'
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
