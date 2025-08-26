import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import bespoke from "../../assets/bespoke.png"
import { FaChevronRight, FaHeadset } from 'react-icons/fa'
import { FiMail, FiShoppingCart } from 'react-icons/fi'
import PaginationPage from './pagination'
import { useAddToCartMutation, useGetSimilarProductsQuery } from '../../services/blueBreedApi';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../services/auth";


const ProductDetail = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
    const [addToCart, {isLoading: cartLoading, error: cartError}] = useAddToCartMutation();

    const dispatch = useDispatch();
    const { id } = useParams()
    const [added, SetAdded] = useState(false)
    //console.log("id:", id)
    const location = useLocation();
    const path = location.pathname.split("/");
    //console.log("path", path.slice("/")[1])
    const directPath = `${path[1]}/${path[2]}`
    ////console.log("path:", `${path[1]}/${path[2]}`)
    let items = [];
    //console.log("dd", typeof(id))

    

    const item = useSelector((state) => state.auth.selectedProduct);
    const {data: similarProducts, isLoading, error} = useGetSimilarProductsQuery({productId: id})
    //console.log("daa:", similarProducts?.data)
    //console.log("yyyy:", item)

    if (!item) return <p>No products selected</p>;
     const optionName = path.slice("/")[1] === "clothings" ? "clothingReadyToWearSizes" : "homeInteriorAndProductSizes"



     const handleClick = (product) => {
        dispatch(setSelectedProduct(product));
      };

    const handleCart = async (productId, size, quantity, color) => {
        // check if any size is picked
  const parent = selectedOptions[optionName] || {};
  const hasAnySize = Object.values(parent).some(arr => arr.length > 0);

  if (!hasAnySize) {
    alert("Please select a size before adding to cart");
    return; // stop execution
  }
   try {
      const result = await addToCart({productId, [optionName]: size, quantity, color}).unwrap()
      console.log("cartResult", result);
      if (result.status === 200) {
        SetAdded(true);
      }

    } catch (err) {
      console.log("handleCartError", err)
    }

  }

 
   const toggleOption = (category, option) => {
    setSelectedOptions(prev => {
    // Ensure we are working inside the right parent (clothing/home)
    const parent = prev[optionName] || {};
    const current = parent[category] || [];

    let updatedCategory;
    if (current.includes(option)) {
      // Remove if already selected
      updatedCategory = current.filter(o => o !== option);
    } else {
      // Add if not selected
      updatedCategory = [...current, option];
    }

    return {
      ...prev,
      [optionName]: {
        ...parent,
        [category]: updatedCategory
      }
    };
  });
};


const clothesCategoriesName = {
  standardClothingSize: "Standard Sizes",
  kidsSizes: "Kids Sizes",
  shoeSizes: "Shoe Sizes",
}
const interiorCategoriesName = {
  RugsAndCarpetsDimension: "Rugs And Carpets Dimension",
  beddingAndMattressSizes: "Bedding And Mattress Sizes",
  curtainsABlindSizes: "Curtains ABlind Sizes",
  furnitureDimensions: "Furniture Dimensions"
}

const categoryMap =
    path.slice("/")[1] === "clothings"
      ? clothesCategoriesName
      : interiorCategoriesName;


//console.log("opt:", option)

   
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
                  {/*   <span className='font-semibold text-[18px]'>Select Size</span> */}
                     {/* Clothing Section */}
                   <div>
                 {Object.entries(item.information.otherOptions?.[optionName] || {})
                      .filter(([_, options]) => Array.isArray(options) && options.length > 0) // ✅ Only keep categories with options
                      .map(([category, options]) => (
                        <div key={category}>
                          <h3 className='pb-3'>{categoryMap[category]}</h3>
                          <div style={{ display: "flex", gap: "8px" }}>
                            {options.map(option => (
                              <button
                                key={option}
                                onClick={() => toggleOption(category, option)}
                                 className={`px-3 py-1 border border-gray-300 rounded 
                                  ${selectedOptions[optionName]?.[category]?.includes(option)
                                    ? "bg-black text-white"
                                    : "bg-white text-black"
                                  }`}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                    ))}
                  </div>

                    {/* <div className='flex gap-5'>
                         <input type="button" value="XS" className='w-[40px] h-[40px] border-[1.5px] border-[#BEBCBD] rounded-2xl text-[14px] font-medium'/>  
                         <input type="button" value="SM" className='w-[40px] h-[40px] border-[1.5px] border-[#BEBCBD] rounded-2xl text-[14px] font-medium'/>  
                         <input type="button" value="LG" className='w-[40px] h-[40px] border-[1px] border-[#BEBCBD] bg-black text-white rounded-2xl text-[14px] font-medium'/>  
                         <input type="button" value="L" className='w-[40px] h-[40px] border-[1.5px] border-[#BEBCBD] rounded-2xl text-[14px] font-medium'/>  
                    </div> */}
                </div>
                <div>
                    <b>Colours Available </b>
                    <p>{item.information?.color}</p>
                </div>
                <div className='flex gap-6'>
                    <button type="button" className='rounded bg-[#E6B566] w-[187px] justify-center items-center py-3 cursor-pointer'>Buy(#{item.information?.price?.actualPrice?.$numberDecimal})</button>
                    <button disabled={added} type="button" className={`w-[187px] rounded  flex justify-center items-center ${added ? "bg-gray-600 ": "bg-[#E6B566] cursor-pointer"}`} onClick={() => handleCart(item._id, selectedOptions, item.information?.currentStockNumber, item.information?.color)}><FiShoppingCart  size={19} className='pt-1'/> <span className='pl-2 cursor-pointer'>{cartLoading ? "Loading..." : added ? "Added" : "Add to cart"}</span></button>
                    
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