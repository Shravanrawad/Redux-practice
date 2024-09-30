import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { add } from '../features/cartSlice';

function SingleProduct() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [cart, setCart] = useState([]); 
  const dispatch = useDispatch()


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false); 
      }
    };

    fetchProduct();
  }, [id]); 

  const handleadd = (product) => {
        dispatch(add(product))    
  }

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!product) {
    return <div>Product not found.</div>; 
  }

  return (
    <div className='max-w-xl mx-auto p-4'>
      <h2 className='text-3xl font-bold mb-4'>{product.title}</h2>
      <img src={product.image} alt={product.description} className='w-full h-64 object-cover mb-4 rounded-md' />
      <p className='text-gray-700 mb-4'>{product.description}</p>
      <div className='flex justify-between items-center'>
        <span className='text-xl font-bold'>${product.price}</span>
        <span className='text-yellow-500'>{product.rating.rate} ⭐ ({product.rating.count} ratings)</span>
      </div>
      <button
        onClick={() => handleadd(product)}
        className='mt-4 bg-violet-500 text-white py-2 px-4 rounded hover:bg-violet-600 transition duration-300'
      >
        Add to Cart
      </button>
    </div>
  );
}

export default SingleProduct;
