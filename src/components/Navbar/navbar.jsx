import React, { useState } from 'react'
import logo from "./img/logo.png";
import user from "./img/user.png";
import { FiSearch } from 'react-icons/fi';
import { FiShoppingCart, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [search, setSearch] = useState("");
  const handleSearch = () => {
    console.log("search", search);
  }
  return (

    <nav className='flex justify-between md:justify-start items-center border-b border-gray-200 bg-white px-9 fixed top-0 z-50 w-full gap-6' style={{fontFamily: "'DM Sans',sans-serif"}}>
        <Link to={"/"}><img src={logo} alt="bluebreedSelect" srcset="" className='w-23 h-20'/></Link>{/* w-23 h-20 */}
        <FiMenu className='block md:hidden ' size={30}/>
        <div className='hidden md:flex flex-grow items-center justify-between gap-4'>
  {/* Navigation links */}
  <ul className='flex gap-8 text-[16px] font-semibold lg:pl-10 lg:gap-12 text-[#4A4A4A]'>
    <Link to={"/clothings"}><li>Clothings</li></Link> 
    <Link to={"/interiors"}><li>Homes/Interior</li></Link> 
    <Link to={"/bespoke"}><li>Bespoke</li></Link>
    <Link to={"/contact"}><li>Contact us</li></Link>
  </ul>

  {/* Search + Cart + User */}
  <div className='flex items-center gap-4 min-w-fit'>
    <div className='flex items-center rounded-2xl h-8 border px-2 gap-2 bg-white'>
      <input
        type="text"
        value={search}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className='w-24 px-2 bg-transparent outline-none text-sm'
      />
      <FiSearch onClick={handleSearch} className="cursor-pointer" />
     
    </div>
     <Link to={"/cart"}>
      <FiShoppingCart size={18} />
      </Link>
    
    <img src={user} alt="user" className='w-[30px]' />
  </div>
</div>

        
    </nav>
  )
}

export default Navbar

/* 
  <div className='hidden md:flex flex-grow pl-10 pr-4'>
           <ul className='flex gap-x-8 flex-grow font-semibold bg-white'>
            <li>Clothings</li>
            <li>Homes/Interior</li>
            <li>Bespoke</li>
            <li>Contact us</li>
        </ul>
        <div className='flex justify-between md:w-[20%] bg-amber-100'>
          <div className='flex items-center rounded-2xl h-8 border px-1 gap-2'> 
            <input type="text" value={search} placeholder='search' onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSearch()} className='flex-grow w-24 px-2 bg-transparent outline-none font-normal'/>
            <FiSearch onClick={handleSearch}/>
          </div>
        <FiShoppingCart size={27} className='pt-2 shrink-0'/>
        <img src={user} alt="user" className='w-[30px]' /> 
        </div>
        </div>
*/