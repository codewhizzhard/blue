import React, { useEffect, useState } from 'react'
import bespoke from "../../assets/bespoke.png";
import { FiShoppingCart } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { useAddToCartMutation, useGetProductsByCategoryNameQuery, useGetProductsByCategoryQuery } from '../../services/blueBreedApi';
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../services/auth";


const PaginationPage = ({items, locate}) => {

    const dispatch = useDispatch();


 // console.log("loacate:", locate.split("/")[2]);
  let categoryId /* = locate.split("/")[2]; */
  useEffect(() => {
    categoryId = locate.split("/")[2];
  }, [])


  const {data: productsData, error: productsError, isLoading: productLoading} = useGetProductsByCategoryNameQuery({categoryName: "sam"});


  console.log("data:", productsData)
  console.log("dataLoad:", productLoading)
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

  const handleCart = async (productId, size, quantity, color) => {
    console.log("carting", productId, quantity, color)
    try {
      const result = await addToCart({productId, size, quantity, color}).unwrap()
      console.log("cartResult", result);
      console.log("err",error)

    } catch (err) {
      console.log("handleCartError", err)
    }

  }

   const handleClick = (product) => {
    dispatch(setSelectedProduct(product));
  };

  return (
    <div className='space-y-10'>

          <ul className='grid md:grid-cols-3 gap-4 grid-cols-2 space-y-4'>
          {productLoading && <p className='text-black'>Loading...</p>}
          {productsData?.data?.products.length > 0 &&
            productsData?.data?.products.map((item, index) => (
             <Link to={`${locate}/${item._id}`} onClick={() => handleClick(item)}>
            <li className='w-fit shrink-0 flex flex-col h-[310px] gap-3 relative text-[#2E2E2E]' key={index}>{/* max-w-[320px] */}
              <img src={item.information?.images[0]} alt="" className='w-full object-cover rounded h-full'/>
                <span className='font-medium text-black text-[16px]'>{item.information?.productName}</span>
                 <span className='font-medium text-black text-[16px]'>#{item.information.price?.actualPrice.$numberDecimal}</span>
               <span className='absolute bg-white right-2 top-2 rounded-4xl p-2'><FiShoppingCart  size={13} onClick={() => handleCart(item._id, item.information.otherOptions.clothingReadyToWearSizes.kidsSizes, item.information?.currentStockNumber, item.information?.color)} className='cursor-pointer'/></span>
              </li>
            </Link>
          ))
        }
        </ul>

      {!productLoading &&
      <div className='flex justify-center gap-4 pt-4'>
        <button onClick={handlePrevPage} className='p-2 bg-[#E6B566] rounded'>
          Prev
        </button>
        <button>{currentPage}</button>
        <button onClick={handleNextPage} className='p-2 bg-[#E6B566] rounded'>
          Next 
        </button>
      </div> 
}
    </div>

  )
}

export default PaginationPage

/*  */