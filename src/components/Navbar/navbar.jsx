import React, { useState } from 'react'
import logo from "./img/logo.png";
import user from "./img/user.png";
import { FiArrowDown, FiArrowUp, FiArrowDownLeft, FiArrowLeftCircle, FiArrowRight, FiArrowRightCircle, FiSearch, FiX } from 'react-icons/fi';
import { FiShoppingCart, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [search, setSearch] = useState("");
  const [mobile, setMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev)
  }

  const handleSearch = () => {
    console.log("search", search);
  }
  return (
    <>
  { /* Web view */}
    <nav className='  justify-start items-center border-b border-gray-200 bg-white px-9 fixed top-0 z-50 w-full gap-6 sm:hidden md:flex' style={{fontFamily: "'DM Sans',sans-serif"}}>
         <Link to={"/"}><img src={logo} alt="bluebreedSelect" srcset="" className='w-23 h-20 md:block hidden'/></Link> {/* w-23 h-20 */}

       
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


    {/* For mobile screen */}
    <nav className='bg-white w-full fixed top-0 z-50 md:hidden'>
      {/* The fixed part of the screen  */}
      <div className='w-full flex justify-between items-center border-b border-gray-200 bg-white px-9'>
        <Link to={"/"}><img src={logo} alt="bluebreedSelect" srcset="" className='w-23 h-20 md:hidden block' onClick={() => setMobile(false)}/></Link> {/* w-23 h-20 */}
        <div>
        {!mobile && <div className='md:hidden ' onClick={() => setMobile(true)}><FiMenu className='block md:hidden ' size={30}/></div>}
        {mobile && <div className='md:hidden w-[100px] flex items-center justify-between' onClick={() => setMobile(false)}> <Link to={"/cart"}>
      <FiShoppingCart size={27} />
      </Link> <FiX size={30} className='block md:hidden '/></div> }
        </div>
      </div>
      {/* The  part that toggles to link to sub pages*/}
      {/* must be layerd like tis to avoid overlapping of elements */}
      {mobile && (
      <div className='flex md:hidden fixed z-40 w-full flex-col min-h-full h-screen overflow-y-auto pb-10'>
     
        <div className='h-full flex-grow flex flex-col px-9 bg-white pt-10 space-y-12'>

        <div className='flex items-center rounded-[42px] py-2 border px-4 gap-2 bg-white'>
      <input
        type="text"
        value={search}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className='flex-grow px-2 bg-transparent outline-none text-sm'
      />
      <FiSearch onClick={handleSearch} className="cursor-pointer" />
     
        </div>
        <ul className='flex flex-col text-[16px] font-semibold  text-[#192F1E] space-y-10 pb-5'>
        {/* <Link to={"/clothings"} onClick={() => setMobile(false)} className=''> */}
        <li className='flex flex-col gap-4 cursor-pointer'>
          <div className='flex justify-between'><div>Clothings</div> {showMenu ? (<FiArrowUp className='w-6 h-5' onClick={handleShowMenu} />) : (<FiArrowDown className='w-6 h-5' onClick={handleShowMenu}/>)} </div>
          {showMenu && (
            <div className="flex flex-col gap-4 pl-4 text-gray-400 cursor-pointer">
              <Link to={"/clothings/men"}  onClick={() => setMobile(false)} className=''><div className='hover:text-black'>Men's Wear</div></Link>
              <Link to={"/clothings/female"}  onClick={() => setMobile(false)} className=''><div className='hover:text-black'>Female's Wear</div></Link>
              <Link to={"/clothings/formal"}  onClick={() => setMobile(false)} className=''><div className='hover:text-black'>Formal's Wear</div></Link>
          </div>
          )}
          
          
        </li>{/* </Link>  */}
        <Link to={"/interiors"} onClick={() => setMobile(false)}><li>Homes/Interior</li></Link> 
        <Link to={"/bespoke"} onClick={() => setMobile(false)}><li>Bespoke</li></Link>
        <Link to={"/contact"} onClick={() => setMobile(false)}><li>Contact us</li></Link>

        <Link
          to="signup"
          onClick={() => setMobile(false)}
          className=""
        >
          <div className="w-full bg-[#E6B566] text-white py-2 text-center rounded-[8px]">
            Sign up
          </div>
        </Link>

        </ul>
        
        {/* <Link to={"/signup"} onClick={() => setMobile(false)} className=''><div className='w-full bg-[#E6B566] text-white py-2 text-center rounded-[8px]'>Sign up</div></Link> */}
          </div>
        </div>
    )}

    </nav>
    
    </>
  )
}

export default Navbar
{/*  
        {
          mobile &&  <div className='bg-red-600 h-screen md:hidden'>
ww
        </div>
        } */}
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
