import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { useSelector } from 'react-redux';

function Navbar() {

  const cartitems = useSelector((state) => state.cart);
  console.log(cartitems);

  return (
    <div className='w-full flex items-center justify-between px-10 p-5 shadow-md'>

       <strong className='text-2xl'>SHOP<span className='text-violet-500'>LLY</span></strong>

      <div className='flex items-center gap-4'>

        <Link to={'/'}>
          <IoHome className='h-5 w-5'/>
        </Link>

         <div className='relative'>
         <Link to={'/cart'}>
          <FaShoppingCart className='h-5 w-5'/>
        </Link>
        {cartitems.length > 0 && <div className='absolute bg-violet-500 h-5 flex justify-center items-center w-5 rounded-full mt-[-30px] ml-[10px]'>
             {cartitems.length}
        </div>}

         </div>

      </div>

    </div>
  )
}

export default Navbar
