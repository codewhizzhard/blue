import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const Cart = () => {
  return (
    <div className='space-y-8 pt-8'>
        <span className=' flex gap-3 items-center text-[#4A4A4A] px-8'>Home <FaChevronRight size={14} className='pt-1'/> Add To Cart</span>
        <div className='flex flex-col overflow-x-auto md:overflow-hidden w-full  px-2 space-y-4'>
            <div className='bg-[#3C4242] flex px-6 h-[76px] items-center md:w-full w-[1445px] space-x-44 md:space-x-0 md:justify-between'>{/* md:justify-between */}
                <span>PRODUCT DETAILS</span>
                <span>PRICE</span>
                <span>QUANTITY</span>
                <span>SHIPPING</span>
                <span>SUBTOTAL</span>
                <span>ACTION</span>
            </div>
            <div className=' flex px-6 h-[76px] items-center md:w-full w-[1445px] space-x-44 md:space-x-0 md:justify-between'>
                <span>1</span>
                <span>1</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
            </div>
        </div>
    </div>
  )
}

export default Cart