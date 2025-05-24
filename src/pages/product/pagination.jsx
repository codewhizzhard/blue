import React, { useState } from 'react'
import bespoke from "../../assets/bespoke.png";
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const PaginationPage = ({items, locate}) => {

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

  return (
    <div className='space-y-10'>
      <ul className='grid md:grid-cols-3 gap-4 grid-cols-2 space-y-4'>
        {
          currentItems.map((item, index) => (
             <Link to={`${locate}/${item.id}`}>
            <li className='w-fit shrink-0 flex flex-col h-[310px] gap-3 relative text-[#2E2E2E]' key={index}>{/* max-w-[320px] */}
              <img src={bespoke} alt="" className='w-full object-center rounded h-full'/>
                <span>{item.name}</span>
                <span>{item.price}</span>
               <span className='absolute bg-white right-2 top-2 rounded-4xl p-2'><FiShoppingCart  size={13} /></span>
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