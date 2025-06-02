import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const Cart = () => {
  return (
    <div className='space-y-10 pt-8 pb-24'>
        <span className=' flex gap-3 items-center text-[#807D7E] px-8'>Home <FaChevronRight size={14} className='pt-1 text-[#3C4242] text-[18px] font-medium'/> <span className='text-[#3C4242]'>Add To Cart</span> </span>

        <div className="flex flex-col overflow-x-auto xl:overflow-hidden w-full space-y-4">

    <div className="flex h-[76px] items-center w-[1445px] xl:w-full px-8 gap-x-4 bg-[#3C4242] font-semibold text-[18px]">
  <span className="flex-2 text-white">PRODUCT DETAILS</span>
  <span className="flex-1 text-white">PRICE</span>
  <span className="flex-1 text-white">QUANTITY</span>
  <span className="flex-1 text-white">SHIPPING</span>
  <span className="flex-1 text-white">SUBTOTAL</span>
  <span className="flex-1 text-white">ACTION</span>
</div>

<div className="flex h-[76px] items-center  w-[1445px] xl:w-full px-8 gap-x-4 text-[18px] ">{/* font-bold */}
  <span className="flex-2">1 PRODUCT DETAILSP RODUCT DETAILS</span>
  <span className="flex-1">1 PRODUCT DETAILS</span>
  <span className="flex-1">1</span>
  <span className="flex-1">2 PRODUCT DETA ILSPOD UC T DETAILS</span>
  <span className="flex-1">3</span>
  <span className="flex-1">4 RODUCT DETAILS ROD UCT DETAILS</span>
</div>

  </div>
  <div className='w-full flex xl:justify-end'>
    <div className='max-w-[576px] space-y-3 px-8 text-[20px] font-normal text-black'>
  <div className='flex justify-between'>
    <span>Subtotals</span>
    <span>343,00</span>
  </div>
  <div className='flex justify-between'>
    <span>Tax</span>
    <span>38.00</span>
  </div>
  <div className='flex justify-between'>
    <span>Shipping</span>
    <span>Free</span>
  </div>
  <div className='flex justify-between'>
    <span>Total Orders</span>
    <span>523.40</span>
  </div>
  <p className='text-[18px] text-[#202020]'>The total amount you pay includes all applicable customs duties & taxes. We guarantee no additional charges on delivery</p>
  <button className='text-white py-3 px-18 text-[18px] font-bold bg-[#E6B566]'>Next</button>
</div>
  </div>
  

    </div>
  )
}

export default Cart