import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import bespoke from "../../assets/bespoke.png"
import { FaChevronRight, FaHeadset } from 'react-icons/fa'
import { FiMail, FiShoppingCart } from 'react-icons/fi'
import PaginationPage from './pagination'
import { useGetSimilarProductsQuery } from '../../services/blueBreedApi';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../services/auth";


const ProductDetail = () => {

    const dispatch = useDispatch();
    const { id } = useParams()
    console.log("id:", id)
    const location = useLocation();
    const path = location.pathname.split("/");
    const directPath = `${path[1]}/${path[2]}`
    console.log("path:", `${path[1]}/${path[2]}`)
    let items = [];
    console.log("dd", typeof(id))

    

    const item = useSelector((state) => state.auth.selectedProduct);
    const {data: similarProducts, isLoading, error} = useGetSimilarProductsQuery({productId: id})
    console.log("daa:", similarProducts?.data)
    console.log("yyyy:", item)

    if (!item) return <p>No products selected</p>;
     const handleClick = (product) => {
        dispatch(setSelectedProduct(product));
      };

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


   
  return (
    <div className='space-y-20 pb-30 px-5'>

        <div className='flex flex-col md:flex-row justify-between'>

            <div className='flex w-full'>
                <div className='w-[30%] flex flex-col justify-center items-end pr-5 '>
                  {item.information?.images.map((image, index) => (
                    <div className='w-[68px] h-[68px] rounded-[9px]' key={index}>
                    <img src={image} alt="img" />
                    </div>
                  ))}
                </div>
                <div className='flex-grow'>{/* p-3 */}
                   <img src={item.information?.images[0]} alt="" className='w-full h-[700px] object-cover'/> 
                </div>
            </div>
            <div className='w-full space-y-9 mx-2 p-3'>
                <span className=' flex gap-3 items-center text-[#4A4A4A]'>Home <FaChevronRight size={14} className='pt-1'/>{item.information?.productName}</span>
                <h2 className='font-semibold text-4xl'>{item.information?.productName}</h2>
                <div className='space-y-3 flex flex-col'>
                    <span className='font-semibold text-[18px]'>Select Size</span>
                    <div className='flex gap-5'>
                         <input type="button" value="XS" className='w-[40px] h-[40px] border-[1.5px] border-[#BEBCBD] rounded-2xl text-[14px] font-medium'/>  
                         <input type="button" value="SM" className='w-[40px] h-[40px] border-[1.5px] border-[#BEBCBD] rounded-2xl text-[14px] font-medium'/>  
                         <input type="button" value="LG" className='w-[40px] h-[40px] border-[1px] border-[#BEBCBD] bg-black text-white rounded-2xl text-[14px] font-medium'/>  
                         <input type="button" value="L" className='w-[40px] h-[40px] border-[1.5px] border-[#BEBCBD] rounded-2xl text-[14px] font-medium'/>  
                    </div>
                </div>
                <div>
                    <b>Colours Available </b>
                    <p>{item.information?.color}</p>
                </div>
                <div className='flex gap-6'>
                    <button type="button" className='rounded bg-[#E6B566] w-[187px] justify-center items-center py-3'>Buy(#{item.information?.price?.actualPrice?.$numberDecimal})</button>
                    <button type="button" className='w-[187px] rounded bg-[#E6B566] flex justify-center items-center' onClick={() => handleCart(item._id, item.information.otherOptions.clothingReadyToWearSizes.kidsSizes, item.information?.currentStockNumber, item.information?.color)}><FiShoppingCart  size={19} className='pt-1'/> <span className='pl-2'>Add to cart</span></button>
                    
                </div>
                <hr className='mt-5'/>
                <div className='flex-col md:flex-row flex w-[65%] gap-y-3 justify-between'>
                  <div className='flex items-center gap-3'><FaHeadset className='bg-[#F6F6F6] p-3 text-[#3C4242] rounded-[100%]' size={40} /><span className='text-[18px] font-medium text-[#3C4242]'>Secured  payment</span></div>
                  <div className='flex items-center gap-3'><FaHeadset className='text-[#3C4242] p-3 bg-[#F6F6F6] rounded-[100%]' size={40} /> <span className='text-[18px] font-medium text-[#3C4242]'>Size & Fit</span></div> 
                </div>
            </div>
        </div>

        <div className='space-y-4'>
            <span className='flex items-center gap-3'>
                <div className='h-[30px] w-[6px] bg-red-300 rounded'></div>
                <h3 className='md:text-[34px] font-semibold text-[24px]'>Product Description</h3>
               
            </span>
            
            <div className='border-[#D9E1EC] border'>
                <p>Step into sophistication with this premium Agbada, a symbol of prestige and cultural heritage. Expertly crafted from high-quality fabric, this traditional attire exudes elegance and confidence, perfect for weddings, special occasions, and grand celebrations.

                Features:
                ✔ Premium Fabric – Soft, breathable, and comfortable for all-day wear.
                ✔ Intricate Embroidery – Handcrafted detailing that enhances its regal appeal.
                ✔ Three-Piece Set – Includes flowing robe, inner tunic, and trousers for a complete look.
                ✔ Versatile Styling – Pairs well with traditional caps and leather footwear.</p>
               <span>features</span>
               <div>ggg</div>
            </div>
        </div>
        <div className='space-y-4'>
            <span className='flex items-center gap-3 pb-4'>
                <div className='h-[30px] w-[6px] bg-red-300 rounded'></div>
                <h3 className='md:text-[34px] font-semibold text-[24px]'>Similar Products</h3>
            </span>
            {/* <PaginationPage items={items} locate={path} /> */}
          {/*   <ul className='grid md:grid-cols-3 grid-cols-2 space-y-4 gap-4'>
                {items.map((item, index) => (
                     <Link to={`/${path}/${item.id}`}>
                        <li className='w-fit shrink-0 flex flex-col h-[310px] gap-3 relative text-[#2E2E2E]' key={index}>
                        <img src={bespoke} alt="" className='w-full object-center rounded h-full'/>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    <span className='absolute bg-white right-2 top-2 rounded-4xl p-2'><FiShoppingCart size={13} /></span>
                    </li>
                    </Link>
                ))}
            </ul>  */}
                <ul className='grid md:grid-cols-3 grid-cols-2 space-y-10 gap-4'>
                {similarProducts?.data?.map((item, index) => (
                     <Link to={`/${directPath}/${item._id}`} key={index} onClick={() => handleClick(item)}>
                        <li className='w-fit shrink-0 flex flex-col h-[322px] gap-3 relative text-[#2E2E2E]' key={index}>
                        <img src={item.information?.images[0]} alt="" className='w-full object-cover rounded h-full'/>
                        <span className='font-medium text-black text-[16px]'>{item?.information?.productName}</span>
                        <span className='font-medium text-black text-[16px]'>{item.information?.price?.actualPrice?.$numberDecimal}</span>
                    <span className='absolute bg-white right-2 top-2 rounded-4xl p-2'><FiShoppingCart size={13} /></span>
                    </li>
                    </Link>
                ))}
            </ul> 
        </div>

    </div>
  )
}

export default ProductDetail