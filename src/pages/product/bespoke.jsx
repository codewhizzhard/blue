import React from 'react'
import bespoke from "../../assets/bespoke.png";
import bespokePage from "../../assets/bespokePage.png";

const Bespoke = () => {
  return (
    <section>
        <div className='relative bg-red-500'>
                <img src={bespoke} alt="" className=' object-cover h-[300px] w-full'/>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className=' flex justify-center items-center absolute inset-0'>
                  <span className='text-white font-semibold text-[48px]'>Bespoke</span>
                </div>
              </div>
       
        <div className='bg-white min-h-screen flex flex-col gap-16 py-18 px-10'>

            <div className='grid md:grid-cols-2 gap-10'>
                <span className='order-2 md:order-1 relative'>
                    <img src={bespoke} alt=""  className=' w-full h-[600px]'/>
                    <p className='absolute bottom-2 right-2 bg-white px-6 py-2 text-[14px]'>Tailored To Perfection</p>
                </span>
                
                <span className='justify-center  flex flex-col gap-3 items-start order-1 md:order-2'>
                    <h2 className='text-[50px] font-semibold leading-14'>Tailored to Perfection, Designed for You</h2>
                    <p className='text-[19px] font-normal text-[#4A4A4A]'>From premium fabrics to flawless finishes — experience custom-made fashion that reflects your unique style and fit. Made just for you, with you in mind.</p>
                    <button className='px-4 py-2 bg-[#E6B566] rounded text-white'>Create Your Own Design</button>
                </span>
            </div>
            <div className='grid md:grid-cols-2 gap-10'>
                <span className='justify-center  flex flex-col gap-3 items-start'>
                    <h2 className='text-[50px] font-semibold leading-14'>Tailored to Perfection, Designed for You</h2>
                    <p className='text-[19px] font-normal text-[#4A4A4A]'>From premium fabrics to flawless finishes — experience custom-made fashion that reflects your unique style and fit. Made just for you, with you in mind.</p>
                    <button className='px-4 py-2 bg-[#E6B566] rounded text-white'>Create Your Own Design</button>
                </span>
                 <span className='order-2 md:order-1 relative'>
                    <img src={bespokePage} alt=""  className=' w-full h-[600px]'/>
                    <p className='absolute bottom-2 right-2 bg-white px-6 py-2 text-[14px]'>Tailored To Perfection</p>
                </span>
                
            </div>

        </div>

       <div className='h-full px-8 md:pt-20 pt-10 pb-10 w-full bg-[#FDF8EF]' style={{fontFamily: "'Cal Sans',sans-serif"}}>
            <span className='flex items-center text-[#E6B566] gap-4 flex-row pb-12'>
                <h2 className='text-black text-lg'>Our Journey</h2>
                <hr className='flex-grow'/>
            </span>
           <div className='flex justify-between flex-col md:flex-row gap-6 mb-8'>
            
            <div className='bg-white px-[22px] py-[36px] rounded-2xl gap-3 flex flex-col pb-10 md:w-[25%]'>
                 <div className='h-[58px] w-[58px]  rounded-2xl bg-black text-white justify-center flex items-center font-bold text-3xl'>0 1</div>
                    <h2 className='font-semibold tracking-wide'>SHARE YOUR VISION</h2>
                    <p className='text-gray-500 font-normal text-sm'>Tell us what you want—send a sketch, photo, idea, or description.</p>
                </div>
            <div className='bg-white px-[22px] py-[36px] rounded-2xl gap-3 flex flex-col pb-10 md:w-[25%]'>
                 <div className='h-[58px] w-[58px]  rounded-2xl bg-black text-white justify-center flex items-center font-bold text-3xl'>0 2</div>
                    <h2 className='font-semibold tracking-wide'>DESIGN CONSULTATION</h2>
                    <p className='text-gray-500 font-normal text-sm'>We’ll schedule a session to refine your ideas.</p>
                </div>
            <div className='bg-white px-[22px] py-[36px] rounded-2xl gap-3 flex flex-col pb-10 md:w-[25%]'>
                 <div className='h-[58px] w-[58px]  rounded-2xl bg-black text-white justify-center flex items-center font-bold text-3xl'>0 1</div>
                    <h2 className='font-semibold tracking-wide'>PRODUCTION BEGINS</h2>
                    <p className='text-gray-500 font-normal text-sm'>Our experts start crafting your custom piece using premium materials.</p>
                </div>
            <div className='bg-white px-[22px] py-[36px] rounded-2xl gap-3 flex flex-col pb-10 md:w-[25%]'>
                 <div className='h-[58px] w-[58px]  rounded-2xl bg-black text-white justify-center flex items-center font-bold text-3xl'>0 1</div>
                    <h2 className='font-semibold tracking-wide'>DELIVERY & REVIEW</h2>
                    <p className='text-gray-500 font-normal text-sm'>Receive your bespoke item. Review it, request final tweaks if needed.</p>
                </div>
           
           </div>
           <div className='flex justify-center'>
                <button className='text-center px-16 py-4 border border-[#E6B566] text-[#E6B566]'>Start Your Design Journey</button>
           </div>
        </div>

    </section>
  )
}

export default Bespoke