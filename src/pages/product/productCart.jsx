import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PaginationPage from './pagination';

const ProductCart = ({items}) => {
  const clothingsBoxes = ["All Products", "Mens Wear", "Formal Wear", "Baby's Wear"];
  const interiorsBoxes = ["All Products", "Living Room", "Bedroom", "Dining"];
  const pricesBox = ["#0-#15,000", "#16,000-#30,000", "#31,000-#45,000", "#46,000-#60,000"];

  const location = useLocation();

  const [locateBoxes, setLocateBoxes] = useState([]);
  const [checkedBoxes, setCheckedBoxes] = useState({});
  const [priceBoxes, setPriceBoxes] = useState({});

  // Set filters based on the current page
  useEffect(() => {
    if (location.pathname.includes("/clothings"))  {
      setLocateBoxes(clothingsBoxes);
    } else if (location.pathname === "/interiors") {
      setLocateBoxes(interiorsBoxes);
    } else {
      setLocateBoxes([]); // fallback
    }
  }, [location.pathname]);

  // Initialize checkedBoxes when locateBoxes change
  useEffect(() => {
    const initialCheck = {};
    locateBoxes.forEach((box) => {
      initialCheck[box] = false;
    });
    setCheckedBoxes(initialCheck);
  }, [locateBoxes]);

  // Initialize priceBoxes once on mount
  useEffect(() => {
    const initialPrice = {};
    pricesBox.forEach((box) => {
      initialPrice[box] = false;
    });
    setPriceBoxes(initialPrice);
  }, []);

  const handleChecked = (box) => {
    setCheckedBoxes((prev) => ({
      ...prev,
      [box]: !prev[box],
    }));
    //console.log("rr",checkedBoxes);
  };

  const handlePriceChecked = (box) => {
    setPriceBoxes((prev) => ({
      ...prev,
      [box]: !prev[box],
    }));
    //console.log("rr",priceBoxes);
  };

  useEffect(() => {
  //console.log("rr:", priceBoxes);
}, [priceBoxes]);


  return (
    <div className="flex flex-col gap-8 pt-6 px-0 min-h-screen md:flex-row pb-24">
      
      <div className=" md:w-[246px] w-full text-[#4A4A4A]">{/* w-full md:w-1/3 */}
        
        <h2 className=" text-black mb-4 text-[22px] font-semibold">Filters</h2>

        <div className="mb-3">
          <h3 className="font-bold mb-2 text-black text-[18px]">Category</h3>
          {locateBoxes.map((box, index) => (
            <label key={index} className="flex gap-2 items-center mb-1">
              <input
                type="checkbox"
                checked={checkedBoxes[box] || false}
                onChange={() => handleChecked(box)}
                className='accent-[#E6B566] w-4 h-4'
              />
              <span>{box}</span>
            </label>
          ))}
          
        </div>
            <hr className='pb-3 text-[#4A4A4A]'/>
        <div className='space-y-3'>
          <h3 className="font-bold mb-2 text-black text-[18px]">Price</h3>
          <div className='flex gap-2 justify-center items-center w-fit'>
            <div className=' w-[89px] flex flex-col gap-1'>
              <label htmlFor="" className=''>maximum</label>
              <input type="number" className='border py-1 outline-none w-full px-2'/>
            </div>
            <span className='pt-6'>-</span>
            <div className='w-[89px] flex flex-col gap-1'>
              <label htmlFor="" className=''>maximum</label>
              <input type="number" className='border py-1 outline-none w-full px-2'/>
            </div>
          </div>
          <div className='mb-6'>
            {pricesBox.map((box, index) => (
            <label key={index} className="flex gap-2 items-center mb-1">
              <input
                type="checkbox"
                checked={priceBoxes[box] || false}
                onChange={() => handlePriceChecked(box)}
                className='w-4 h-4 accent-[#E6B566]'
              />
              <span>{box.toUpperCase()}</span>
            </label>
            ))}
          </div>

        </div>
      </div>

     {/*  <div className="flex-1">
        <h2 className="text-lg font-semibold">Products will be displayed here...</h2>
        /* You can map through filtered products here based on checked filters       </div> */}
      <div className='flex-grow space-y-2'>
          <div className='flex justify-start flex-col md:flex-row md:justify-between space-y-5'>
          <h2 className='text-[32px] font-semibold'>PRODUCTS</h2>
          <button className='h-[46px] bg-[#E6B566] rounded text-white w-[281px]'>Create Your Own Design</button>
          </div>      
       <div className='w-full p-0 pt-4'>
          <PaginationPage items={items} locate={location.pathname}/>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;