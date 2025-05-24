import React from 'react'
import bespoke from "../../assets/bespoke.png";
import ProductCart from './productCart';
import { FaChevronRight } from 'react-icons/fa';

const Interiors = () => {
  const items = [
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

  return (
    
    <section className='flex flex-col min-h-screen'>
      <div className='relative bg-red-500'>
        <img src={bespoke} alt="" className=' object-cover h-[300px] w-full'/>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className=' flex justify-center items-center absolute inset-0'>
          <span className='text-white font-semibold text-[48px]'>Homes/Interior</span>
        </div>
      </div>
      <div className='flex-grow pt-10 px-5'>
        <span className='pl-6 flex gap-3 items-center text-[#4A4A4A]'>Home <FaChevronRight size={14} className='pt-1'/>Homes/Interior</span>
        <ProductCart items={items}/>
      </div>
      
    </section>
  
  )
}

export default Interiors