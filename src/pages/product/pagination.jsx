import React, { useState } from 'react'
import bespoke from "../../assets/bespoke.png";
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAddToCartMutation } from '../../services/blueBreedApi';
const PaginationPage = ({items, locate}) => {

  const [addToCart, {isLoading, error}] = useAddToCartMutation();

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = itemsPerPage + startIndex;
  const currentItems = items.slice(startIndex, lastIndex);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    console.log("prev", currentPage)
  }
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    console.log("next", currentPage)
  }

  console.log("page", locate);

  const handleCart = async (id) => {
    console.log("carting")
    try {
      const result = await addToCart({productId: "1", size: "2", quantity: 1, color: "red"}).unwrap()
      console.log("cartResult", result);
      console.log("err",error)

    } catch (err) {
      console.log("handleCartError", err)
    }

  }
  return (
    <div className='space-y-10'>
   {/*  <ul className="flex flex-wrap gap-y-8 justify-between">
  {currentItems.map((item, index) => (
    <li
      key={index}
      className="flex flex-col gap-3 relative text-[#2E2E2E] w-[45%] sm:w-[45%] lg:w-[30%] max-w-[327px] shrink h-[322px] grow-0"
    >
      <Link to={`${locate}/${item.id}`} className="block h-full">
        <img
          src={bespoke}
          alt=""
          className="w-full object-cover object-center rounded h-[232px]"
        />
        </Link>
        <span className='font-medium text-black text-[16px]'>{item.name}</span>
        <span className='font-medium text-black text-[16px]'>{item.price}</span>
        <span className="absolute bg-white right-2 top-2 rounded-4xl p-2">
          <FiShoppingCart size={13} />
        </span>
     
    </li>
  ))}
</ul> */}

          <ul className='grid md:grid-cols-3 gap-4 grid-cols-2 space-y-4'>
        {
          currentItems.map((item, index) => (
             <Link to={`${locate}/${item.id}`}>
            <li className='w-fit shrink-0 flex flex-col h-[310px] gap-3 relative text-[#2E2E2E]' key={index}>{/* max-w-[320px] */}
              <img src={bespoke} alt="" className='w-full object-cover rounded h-full'/>
                <span className='font-medium text-black text-[16px]'>{item.name}</span>
                <span className='font-medium text-black text-[16px]'>{item.price}</span>
               <span className='absolute bg-white right-2 top-2 rounded-4xl p-2'><FiShoppingCart  size={13} onClick={() => handleCart(item.id)} className='cursor-pointer'/></span>
              </li>
            </Link>
          ))
        }
        </ul>

      
      <div className='flex justify-center gap-4 pt-4'>
        <button onClick={handlePrevPage} className='p-2 bg-[#E6B566] rounded'>
          Prev
        </button>
        <button>{currentPage}</button>
        <button onClick={handleNextPage} className='p-2 bg-[#E6B566] rounded'>
          Next 
        </button>
      </div>
    </div>
  )
}

export default PaginationPage

/*  */