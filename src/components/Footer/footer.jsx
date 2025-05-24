import React from 'react';
import logo from "../Navbar/img/logo.png";

const Footer = () => {

    const getCurrentYear = () => {
        let year = new Date().getFullYear();
        return year;
    }
  return (
    /* mobile view */

    <footer className='bg-black flex flex-col text-white leading-[160%] gap-y-[105px] pl-6 md:px-10' style={{fontFamily: "'Cal Sans',sans-serif"}}>
        <span className=' flex flex-col md:flex-row gap-8 font-normal  md:items-start justify-start md:justify-between pt-10' >
        <div className='flex flex-col gap-3'>
            <img src={logo} alt="blueBreed" className='w-23 h-20'/>
            <span className=''>Elevating Style & Spaces with Elegance.</span>
        </div>
        <div className='flex flex-col gap-y-4'>
            <h2>
            Legal & Copyright
        </h2>
        <ul className='font-light flex flex-col gap-y-4' style={{fontFamily: "'DM Sans',sans-serif"}}>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            </ul>
        </div>
        <div className='flex flex-col gap-y-4'>
            <h2>Customer Support</h2>
            <span style={{fontFamily: "'DM Sans',sans-serif"}} className='font-light'>Refund & Return Policy</span>
        </div>
    </span>
        <div className='space-y-8 mb-8'>
            <hr className=''/>
            <p className='font-light'>&copy;&nbsp;{`${getCurrentYear()} Bluebreed Select. All Rights Reserved.`}</p>
        </div>
    </footer>
    
    
    
  )
}

/* <span>
        
        <div className=''>
            <h2>
            Legal & Copyright
        </h2>
        <ul className='font-light flex flex-col gap-4 pt-4' style={{fontFamily: "'DM Sans',sans-serif"}}>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            </ul>
        </div>

  <div className='bg-red-600 h-[100%] gap-y-4'>
            <h2>Customer Support</h2>
            <div style={{fontFamily: "'DM Sans',sans-serif"}} className='font-light'>Refund & Return Policy</div>
        </div>

        
        </span>
        <span className='mt-32 hidden md:block'>
             <hr className='pt-12'/>
            <p className='font-light'>&copy; 2025 Bluebreed Select. All Rights Reserved.</p>
        </span> */

export default Footer