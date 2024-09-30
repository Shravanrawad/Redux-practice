import React from 'react';
import {useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { remove } from '../features/cartSlice';

function Cart() {
  const cartitems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
   
  const handleremove = (id) => {
    dispatch(remove(id));
  }
  
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-semibold my-4">Shopping Cart</h2>
      {cartitems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="w-full max-w-4xl">
          {cartitems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between border-b p-4 mb-4 shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-cover"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-gray-900 mt-2">Price: ${item.price}</p>
                <p className="text-gray-600">Category: {item.category}</p>
              </div>
              <div className="flex items-center flex-col justify-between">
               
                <div>
                  <button onClick={() => handleremove(item.id)} className='bg-violet-500 rounded-md ml-5 p-2'>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
