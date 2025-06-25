import React from 'react'
import reactt from "../assets/react.svg";
import { FiArrowRight } from 'react-icons/fi';
import arrow from "../assets/arrowRight.png";
import bespoke from "../assets/bespoke.png";
import home from "../assets/home.png";
import landed from "../assets/landing.png";
import homeIn from "../assets/homeIn.png";
import fsit from "../assets/fsit.jpg";
import fcop from "../assets/fcop.jpg";
import fswag from "../assets/fswag.jpg";
/* import suit from "../assets/suitt.png"; */
import trough from "../assets/trough.png";
import wcop from "../assets/wcop.png";
import tailor from "../assets/tailor.png";
import outside from "../assets/outside.png";
import chair from "../assets/chair.png";
import house from "../assets/house.jpg";
import flower from "../assets/flower.jpg";
import living from "../assets/living.jpg";
import dinning from "../assets/dinning.jpg";
import bed from "../assets/bed.jpg";
import jacket from "../assets/jacket.png";
import interiors from "../assets/interiors.png";
import suit from "../assets/suit.png";
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import "./landing.css"
import { HiArrowNarrowRight } from 'react-icons/hi';
//import "./landing.css"



const LandingPage = () => {

    const itemsRef = useRef([]);
    const containerRef = useRef(null);
    const items = [
        house, home, flower, chair
    ]

   /*  useEffect(() => {
        const container = containerRef.current;

        const handleScroll = () => {
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + container.offsetWidth / 2;
        console.log(containerCenter);

        itemsRef.current.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const boxcenter = rect.left + rect.width / 2;
            const distance = Math.abs(containerCenter - boxcenter);
            console.log("mh dis", distance);
            const height = distance < 180 ? "400px" : "300px";
            const weight = distance < 180 ? "200px" : "200px";
            //const scale = distance < 50 ? 1.1 : 1;
            el.style.weight = weight;
            el.style.height = height;
            if (height) {<p>
                name
            </p>}
            
            //console.log("my hei",el.style.height)
        });
    }

        


        handleScroll();
        container.addEventListener("scroll", handleScroll, { passive: true });
        return () => container.removeEventListener("scroll", handleScroll);

    }, []) */
    
    

    const signUp = () => {
        if (!data.id) {
            <span>
                <Link to={"/signup"} />
            </span>
        }
    }

  return (
    <section className='w-full min-h-screen bg-[#FDF8EF]'>
        <div className='w-full relative h-full bg-red-600'>
           <img src={landed} alt="" srcSet="" className=' object-cover w-full h-[681px] md:h-[33rem]  bg-red-200' />{/*  */}
           <div className='absolute inset-0 flex justify-center flex-col text-white text-center gap-y-6 items-center px-2 md:px-10' style={{fontFamily: "'DM Sans',sans-serif"}}>
            <h2 className='font-semibold leading-[70px] text-6xl md:left-16 md:right-16'>Shop Fashion. Elevate Spaces. Customize with Elegance</h2>
            <p className='md:px-10 px-6'>Where Fashion Meets Interior Elegance – Shop, Style, and Personalize Your Space.</p>
             <NavLink to={"/clothings"}><div className='rounded-2xl bg-white text-black text-sm font-semibold flex justify-center items-center py-2 px-8'> Start exploring</div> </NavLink>{/* px-8 py-2 md:p-0 */} {/* md:w-[13%] md:h-[10%] */}
           </div>
        </div>

        {/* <div className='w-full  flex-col md:pt-20 px-8 pt-10 pb-20' style={{fontFamily: "'Cal Sans',sans-serif"}}>
            <span className='flex md:items-center text-[#E6B566] gap-4 flex-col md:flex-row pb-2'>
                <h2 className='text-black text-lg'>About Us</h2>
                <hr className='md:flex-grow'/>
            </span>
            <div className='flex flex-col flex-grow items-center gap-4 md:grid md:grid-cols-2 md:grid-rows-2'>
                <div className='rounded-2xl bg-white pt-2 pb-4 flex flex-col gap-8 row-span-2 px-2'>
                    <div className='relative'>
                        <img src={suit} alt="" className='h-[510px] object-cover  w-full rounded-2xl'/>
                        <span className='absolute bottom-0 right-0 bg-[#E6B566] px-7 py-2 rounded-tl-3xl rounded-br-2xl text-white font-medium'>Clothing</span>
                    </div>
                 
                     <div className='flex flex-row pl-2  items-center  justify-between md:gap-4 gap-2'>
                        <p className=' '>BlueBreeds transforms your space with elegant and modern designs.</p>
                        <Link to="/clothings"><div className='flex md:gap-2  items-center gap-[2px]'>
                          <p className='text-[#E6B566]'>Explore</p> 
                            <FiArrowRight className='text-[#E6B566]' size={23} height={10}/>
                        </div> </Link>
                    </div>
                </div> 
                <div className='rounded-2xl bg-white pt-2 pb-4 flex flex-col gap-8 px-2'>
                    <div className='relative'>
                        <img src={homeIn} alt="" className='h-[200px] object-cover  w-full rounded-2xl'/>
                        <span className='absolute bottom-0 right-0 bg-[#E6B566] px-7 py-2 rounded-tl-3xl rounded-br-2xl text-white font-medium'>Homes/Interior</span>
                    </div>
                     <div className='flex flex-row pl-2  items-center  justify-between md:gap-4 gap-2'>
                        <p className=' '>BlueBreeds transforms your space with elegant and modern designs.</p>
                        <Link to="interiors"><div className='flex md:gap-2  items-center gap-[2px]'>
                            <p className='text-[#E6B566]'>Explore</p> 
                           <FiArrowRight className='text-[#E6B566]' size={23} height={10}/>
                        </div></Link>
                    </div>
                </div> 
                <div className='rounded-2xl bg-white pt-2 pb-4 flex flex-col gap-8 px-2'>
                    <div className='relative'>
                        <img src={bespoke} alt="" className='h-[200px] object-cover w-full rounded-2xl'/>
                        <span className='absolute bottom-0 right-0 bg-[#E6B566] px-7 py-2 rounded-tl-3xl rounded-br-2xl text-white font-medium'>Bespoke</span>
                    </div>
                    <div className='flex flex-row pl-2  items-center  justify-between md:gap-4 gap-2'>
                        <p className=' '>BlueBreeds transforms your space with elegant and modern designs.</p>
                        <Link to="bespoke"><div className='flex md:gap-2  items-center gap-[2px]'>
                            <p className='text-[#E6B566]'>Explore</p> 
                            <FiArrowRight className='text-[#E6B566]' size={23} height={10}/>
                        </div></Link>
                    </div>
                </div> 
            </div>
        </div> */}

        <div className='w-full md:flex md:pt-20 pt-10 pb-20 bg-white relative px-6 md:px-0 '>
            <div className='w-full '>
                <img src={jacket} alt="" className='object-cover w-full rounded-[11px] md:rounded-[0px]'/>
            </div>
            <div className='w-full md:block hidden'>
                <img src={suit} alt="" className='object-cover'/>
            </div>
            <div className='absolute inset-0 flex flex-col justify-center items-center gap-7 w-full'>
                <p className='md:text-[40px] text-[32px]  font-medium text-white w-[50%] text-center'>Premium Casual And Formal Wear.</p>
                <button type='button' className='px-8 py-4 text-[15px] font-semibold border-[3px] border-white rounded-[39px] text-white'>Shop collections</button>
            </div>
        </div>

        <div className='h-full md:px-16  bg-white md:pt-20 pt-10 pb-10 w-full' style={{fontFamily: "'Cal Sans',sans-serif"}}>
            <span className='flex md:items-center text-[#E6B566] gap-4 flex-col md:flex-row pb-12 px-10 md:px-0'>
                <h2 className='text-black text-[33.99px] font-semibold'>Explore our Fashion collections</h2>
                <hr className='md:flex-grow'/>
            </span>
            <div className='flex md:flex-row gap-4 md:justify-center items-center overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-align-none px-10'>
                <div className='flex flex-col items-center gap-4 w-[80%] flex-shrink-0 md:w-[32.5%] snap-center'>
                    <img src={fswag} alt="" className='h-[460px] object-cover rounded-2xl w-full'/>
                    <span>Sport Wear</span>
                </div>
                <div className='flex flex-col items-center gap-4 w-[80%] flex-shrink-0 md:w-[32.5%] snap-center md:snap-align-none'>
                    <img src={fcop} alt="" className='h-[460px] object-cover rounded-2xl w-full'/>
                    <span>Casual Wear</span>
                </div>
                <div className='flex flex-col items-center gap-4 w-[80%] flex-shrink-0 md:w-[32.5%] snap-center'>
                    <img src={fsit} alt="" className='h-[460px] object-cover rounded-2xl w-full'/>
                    <span>Formal Wear</span>
                </div>
            </div>
        </div>

        <div className='w-full flex flex-col px-10 mt-10 md:px-18 space-y-9 pb-10'>
            {/* <span className='flex justify-between  flex-col md:flex-row w-full md:items-center'>
                <h2 className='text-[40px] font-semibold md:w-[60%] text-black md:w-[100%]'> Custom fashion and interior solutions tailored just for you.</h2>
                <button className='text-[18px] font-bold px-7  max-w-[172px] bg-[#E6B566] text-white #E6B566md:rounded-[0px]'>Explore Now</button>
            </span> */}
            <div className='flex flex-col md:flex-row justify-between md:items-center space-y-8'>
                <h2 className='text-[40px] font-semibold md:w-[65%]'>Custom fashion and interior solutions tailored just for you.</h2>
                <button className='w-[172px] bg-[#E6B566] font-bold text-[18px] py-3 md:rounded-[0px] rounded-[39px]'>Explore Now</button>
            </div>
            
            <div className='columns-2 '>
            <div className='relative break-inside-avoid mb-4 h-[500px]'>
                <img src={tailor} alt="" srcSet="" className=' object-cover w-full h-full rounded-[7px] md:rounded-[12px]'/>{/*h-[500px]  */}
                <span className='absolute sm:right-3 sm:bottom-3 sm:px-4 sm:py-2 bg-white bottom-1 right-1  p-2 w-[80%] sm:w-fit'>Crafted with Intention</span>
            </div>
            <div className='relative break-inside-avoid mb-4 h-[820px]'>
                <img src={trough} alt="" srcSet="" className='h-full object-cover w-full rounded-[7px] md:rounded-[12px]'/>
                <span className='absolute sm:right-3 sm:bottom-3 sm:px-4 sm:py-2 bg-white bottom-1 right-1  p-2 w-[80%] sm:w-fit'>Designs That Define Spaces</span>
            </div>
            <div className='relative break-inside-avoid mb-4 h-[850px]'>
                <img src={wcop} alt="" srcSet="" className='h-full object-cover w-full rounded-[7px] md:rounded-[12px]'/>
                <span className='absolute sm:right-3 sm:bottom-3 sm:px-4 sm:py-2 bg-white bottom-1 right-1  p-2 w-[80%] sm:w-fit'>Elegance in Every Stitch</span>
            </div>
            <div className='relative break-inside-avoid mb-4 h-[400px] '>
                <img src={outside} alt="" srcSet="" className='object-cover w-full h-full rounded-[7px] md:rounded-[12px]'/>
                <span className='absolute sm:right-3 sm:bottom-3 sm:px-4 sm:py-2 bg-white bottom-1 right-1  p-2 w-[80%] sm:w-fit'>Confidence, Custom-Made</span>
            </div>
        </div>
        </div>
        

        <div className='h-full bg-white md:pr-6 w-full md:flex md:flex-col space-y-9 md:pt-20 pt-10 pb-50 md:pb-20 sm:relative md:static' style={{fontFamily: "'Cal Sans',sans-serif"}}>{/* md:pt-20 pt-10 pb-10 */}
            {/* <span className='flex md:items-center text-[#E6B566] gap-4 flex-col md:flex-row pb-12'>
                
            </span> */}
            <h2 className='text-black text-[40px] font-semibold text-center'>Explore Our Interiors</h2>
                
           {/*  <div className='flex md:flex-row gap-4 md:justify-center items-center overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-align-none'>
                <div className='flex flex-col items-center gap-4 w-[80%] flex-shrink-0 md:w-[32.5%] snap-center'>
                    <img src={living} alt="" className='h-[460px] object-cover rounded-2xl'/>
                    <span>Living Room</span>
                </div>
                <div className='flex flex-col items-center gap-4 w-[80%] flex-shrink-0 md:w-[32.5%] snap-center md:snap-align-none'>
                    <img src={dinning} alt="" className='h-[460px] object-cover rounded-2xl'/>
                    <span>Dining</span>
                </div>
                <div className='flex flex-col items-center gap-4 w-[80%] flex-shrink-0 md:w-[32.5%] snap-center'>
                    <img src={bed} alt="" className='h-[460px] object-cover rounded-2xl'/>
                    <span>Bedroom</span>
                </div>
            </div> */}
            <div className='flex gap-8 items-end relative md:static md:pb-10 pb-50'>
                <div className='md:w-[68%] w-full'>
                <img src={interiors} alt="" className='w-full md:rounded-r-[24px] h-[568px] object-cover'/>
                </div>
                <div className='md:w-[25%] w-[80%] md:rounded-[24px] bg-black h-fit py-5 md:h-[400px] absolute md:static top-120 left-10 right-2 text-white px-6 space-y-8 py-4 md:py-30'>
                    <p className='text-[28px] font-semibold'>Crafted Beautiful Spaces To Inspire Your Next Home Transformation</p>
                    <button className='px-7 py-3 bg-[#E6B566] text-[18px] font-bold rounded-[40px]'>Shop Collection</button>
                </div>
            </div>
            
        </div>

        <div className='bg-black flex md:flex-row flex-col text-white px-8 md:pt-20 pt-10 pb-10 justify-center items-center gap-8 '>

            <div className='space-y-5 text-center md:text-start md:w-[40%]'>
                <h2 className='font-semibold text-4xl'>100+ Stunning Home Designs</h2>
                <p>Our interior designers have crafted beautiful spaces to inspire your next home transformation</p>
                <button className='bg-[#E6B566] py-2 px-6'>Explore More</button>
            </div>

            <div className='h-[410px] md:w-[70%] w-[100%]'>
                <div className="overflow-x-scroll snap-x snap-mandatory flex gap-3 hide-scrollbar relative">
                    {items.map((item, index) => (
                        <div
                        key={index}
                        className="relative snap-center transition-all duration-300 shrink-0 ease-in-out h-[340px] hover:h-[400px] group w-[300px]"
                        >
                        <img
                            src={item}
                            className="h-full object-cover w-full"
                            alt={`item-${index}`}
                        />

                        {/* Hover Text Overlay */}
                        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex  justify-center items-end">
        
            <span className=" text-lg font-semibold p-4 bg-white text-black mr-1"> 
            <div className='flex justify-center items-center gadiv-[6px]'>
                <span>01</span>
                <hr className='flex-grow'/>
                <span>Living Room</span>
            </div>
            <b>Modern Elegance</b>
        </span>
        <div className=' bg-[#E6B566]'>
            <HiArrowNarrowRight size={35} className='p-2 text-[1px] font-extralight'/>
                    </div>
                </div>
                </div>
            ))}
            </div>
                
            </div>

          
        </div>
{/* 
        <div className='h-full px-8 md:pt-20 pt-10 pb-10 w-full' style={{fontFamily: "'Cal Sans',sans-serif"}}>
            <span className='flex md:items-center text-[#E6B566] gap-4 flex-col md:flex-row pb-12'>
                <h2 className='text-black text-lg'>Tailored Just for You</h2>
                <hr className='md:flex-grow'/>
            </span>
           <div className='flex justify-between flex-col md:flex-row gap-6 mb-8'>
            
            <div className='bg-white px-[22px] py-[36px] rounded-2xl gap-3 flex flex-col pb-10 md:w-[25%]'>
                 <div className='h-[58px] w-[58px]  rounded-2xl bg-[#E6B566] text-white justify-center flex items-center font-bold text-3xl'>0 2</div>
                    <h2 className='font-semibold tracking-wide'>SHARE YOUR VISION</h2>
                    <p className='text-gray-500 font-normal text-sm'>Tell us what you want—send a sketch, photo, idea, or description.</p>
                </div>
            <div className='bg-white px-[22px] py-[36px] rounded-2xl gap-3 flex flex-col pb-10 md:w-[25%]'>
                 <div className='h-[58px] w-[58px]  rounded-2xl bg-[#E6B566] text-white justify-center flex items-center font-bold text-3xl'>0 2</div>
                    <h2 className='font-semibold tracking-wide'>DESIGN CONSULTATION</h2>
                    <p className='text-gray-500 font-normal text-sm'>We’ll schedule a session to refine your ideas.</p>
                </div>
            <div className='bg-white px-[22px] py-[36px] rounded-2xl gap-3 flex flex-col pb-10 md:w-[25%]'>
                 <div className='h-[58px] w-[58px]  rounded-2xl bg-[#E6B566] text-white justify-center flex items-center font-bold text-3xl'>0 3</div>
                    <h2 className='font-semibold tracking-wide'>PRODUCTION BEGINS</h2>
                    <p className='text-gray-500 font-normal text-sm'>Our experts start crafting your custom piece using premium materials.</p>
                </div>
            <div className='bg-white px-[22px] py-[36px] rounded-2xl gap-3 flex flex-col pb-10 md:w-[25%]'>
                 <div className='h-[58px] w-[58px]  rounded-2xl bg-[#E6B566] text-white justify-center flex items-center font-bold text-3xl'>0 4</div>
                    <h2 className='font-semibold tracking-wide'>DELIVERY & REVIEW</h2>
                    <p className='text-gray-500 font-normal text-sm'>Receive your bespoke item. Review it, request final tweaks if needed.</p>
                </div>
           
           </div>
           <div className='flex justify-center'>
                <button className='text-center px-16 py-4 border border-[#E6B566] text-[#E6B566]'>Start Your Design Journey</button>
           </div>
        </div> */}

    </section>
  )
}



export default LandingPage

