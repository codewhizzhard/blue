import React from 'react'
import bespoke from "../../assets/bespoke.png";
import ProductCart from "./productCart.jsx";
import { FaChevronRight } from 'react-icons/fa';

const Clothings = () => {
  const items = [
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

  return (
    <section className='flex flex-col min-h-screen'>
      <div className='relative bg-red-500'>
        <img src={bespoke} alt="" className=' object-cover h-[300px] w-full'/>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className=' flex justify-center items-center absolute inset-0'>
          <span className='text-white font-semibold text-[48px]'>Clothings</span>
        </div>
      </div>
      <div className='flex-grow pt-10 px-5'>
        <span className='pl-6 flex gap-3 items-center text-[#4A4A4A]'>Home <FaChevronRight size={14} className='pt-1'/>Clothings</span>
        <ProductCart items={items}/>
      </div>
      
    </section>
  )
}

export default Clothings