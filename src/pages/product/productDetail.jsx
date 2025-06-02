import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import bespoke from "../../assets/bespoke.png"
import { FaChevronRight, FaHeadset } from 'react-icons/fa'
import { FiMail, FiShoppingCart } from 'react-icons/fi'
import PaginationPage from './pagination'


const ProductDetail = () => {
    const { id } = useParams()
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    let items = [];
    console.log("dd", typeof(id))
    //const [items, setItems] = useState([]);
    if (path === "clothings") {
     items = [
  {
    id: 1,
    name: "Clothings 1",
    price: 15000,
    image: "/images/clothings1.jpg",
    description: "Nice cotton shirt",
  },
  {
    id: 2,
    name: "Clothings 2",
    price: 23000,
    image: "/images/clothings2.jpg",
    description: "Stylish jeans",
  },
  {
    id: 3,
    name: "Clothings 3",
    price: 18000,
    image: "/images/clothings3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 4,
    name: "Clothings 4",
    price: 18000,
    image: "/images/clothings3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 5,
    name: "Clothings 5",
    price: 18000,
    image: "/images/clothings3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 6,
    name: "Clothings 6",
    price: 18000,
    image: "/images/clothings3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 7,
    name: "Clothings 7",
    price: 18000,
    image: "/images/clothings3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 8,
    name: "Clothings 8",
    price: 18000,
    image: "/images/clothings3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 9,
    name: "Clothings 9",
    price: 18000,
    image: "/images/clothings3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 10,
    name: "Clothings 10",
    price: 18000,
    image: "/images/clothings3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 11,
    name: "Clothings 11",
    price: 18000,
    image: "/images/clothings3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 12,
    name: "Clothings 12",
    price: 18000,
    image: "/images/clothings3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 13,
    name: "Clothings 13",
    price: 18000,
    image: "/images/clothings3.jpg",
    description: "Casual sneakers",
  },
  // ...more items
];

    } else if (path === "interiors") {
        items = [
  {
    id: 1,
    name: "Product 1",
    price: 15000,
    image: "/images/product1.jpg",
    description: "Nice cotton shirt",
  },
  {
    id: 2,
    name: "Product 2",
    price: 23000,
    image: "/images/product2.jpg",
    description: "Stylish jeans",
  },
  {
    id: 3,
    name: "Product 3",
    price: 18000,
    image: "/images/product3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 3,
    name: "Product 3",
    price: 18000,
    image: "/images/product3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 3,
    name: "Product 3",
    price: 18000,
    image: "/images/product3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 3,
    name: "Product 3",
    price: 18000,
    image: "/images/product3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 3,
    name: "Product 3",
    price: 18000,
    image: "/images/product3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 3,
    name: "Product 3",
    price: 18000,
    image: "/images/product3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 3,
    name: "Product 3",
    price: 18000,
    image: "/images/product3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 3,
    name: "Product 3",
    price: 18000,
    image: "/images/product3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 3,
    name: "Product 3",
    price: 18000,
    image: "/images/product3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 3,
    name: "Product 3",
    price: 18000,
    image: "/images/product3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 3,
    name: "Product 3",
    price: 18000,
    image: "/images/product3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 3,
    name: "Product 3",
    price: 18000,
    image: "/images/product3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 3,
    name: "Product 3",
    price: 18000,
    image: "/images/product3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 3,
    name: "Product 3",
    price: 18000,
    image: "/images/product3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 3,
    name: "Product 3",
    price: 18000,
    image: "/images/product3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 3,
    name: "Product 3",
    price: 18000,
    image: "/images/product3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 3,
    name: "Product 3",
    price: 18000,
    image: "/images/product3.jpg",
    description: "Casual sneakers",
  },
  {
    id: 3,
    name: "Product 3",
    price: 18000,
    image: "/images/product3.jpg",
    description: "Casual sneakers",
  },
  // ...more items
];
    }
    //const [item, setItem] = useState([]);

    const item = items.find((item) => item.id.toString() === id)
      /* useEffect(() => {
    const item = items.find((item) => item.id.toString() === id.toString());
        setItem(item)
  }, [id, items]); */

    if (!item) {
       return  <div> No product available </div>
    }
   
  return (
    <div className='space-y-20 pb-30 px-5'>

        <div className='flex flex-col md:flex-row justify-between'>

            <div className='flex w-full'>
                <div className='w-[30%]'>
                    {item.name}
                </div>
                <div className='flex-grow '>{/* p-3 */}
                   <img src={bespoke} alt="" className='w-full h-[700px] object-cover'/> 
                </div>
            </div>
            <div className='w-full space-y-9 mx-2 p-3'>
                <span className=' flex gap-3 items-center text-[#4A4A4A]'>Home <FaChevronRight size={14} className='pt-1'/>{item.name}</span>
                <h2 className='font-semibold text-4xl'>Cocoa Crest Overcoat</h2>
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
                </div>
                <div className='flex gap-6'>
                    <button type="button" className='rounded bg-[#E6B566] w-[187px] justify-center items-center py-3'>Buy(34,000)</button>
                    <button type="button" className='w-[187px] rounded bg-[#E6B566] flex justify-center items-center'><FiShoppingCart  size={19} className='pt-1'/> <span className='pl-2'>Add to cart</span></button>
                    
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
                {items.map((item, index) => (
                     <Link to={`/${path}/${item.id}`}>
                        <li className='w-fit shrink-0 flex flex-col h-[322px] gap-3 relative text-[#2E2E2E]' key={index}>
                        <img src={bespoke} alt="" className='w-full object-cover rounded h-full'/>
                        <span className='font-medium text-black text-[16px]'>{item.name}</span>
                        <span className='font-medium text-black text-[16px]'>{item.price}</span>
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