import React from 'react'
import { FaHeadset } from 'react-icons/fa'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

const Contact = () => {
  return (
    <section className='flex flex-col items-center min-h-screen px-10 pt-3 pb-5'>
        <h2 className='text-[50px] font-semibold pt-10'>Contact Us</h2>
        <p className='text-[#4A4A4A] text-[19px] pt-2 text-center md:px-14'>We’d love to hear from you — whether you’re making an inquiry, placing a bespoke order, or simply saying hello. Reach out using any of the channels below.</p>
        <div className='flex flex-col  md:flex-row-reverse w-full justify-between pt-10 gap-8 mb-10'>
        <form className='w-full border px-6 pt-6 pb-8 rounded-2xl space-y-3 border-[#EDEFF2]'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="" className='text-[#6B7280] '>Full Name</label>
                <input type="text" className='outline-none border py-3 rounded-[6px] border-[#EDEFF2] pl-5 text-[#4A4A4A]' placeholder='enter your full name'/>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="" className='text-[#6B7280] '>Email Address</label>
                <input type="email" className='outline-none border py-3 rounded-[6px] border-[#EDEFF2] pl-5 text-[#4A4A4A]' placeholder='enter your email address'/>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="" className='text-[#6B7280] '>Email Address</label>
                <input type="text" className='outline-none border py-3 rounded-[6px] border-[#EDEFF2] pl-5 text-[#4A4A4A]' placeholder='enter a subject'/>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="" className='text-[#6B7280] '>Message Box</label>
                <textarea name="message" id="" className='outline-none border py-3 rounded-[6px] border-[#EDEFF2] pl-5 text-[#4A4A4A] resize-none' rows={5} placeholder='Write a message...'></textarea>
            </div>
            <input type='button' value="Send Message" className='text-white bg-[#E6B566] rounded py-2 px-8 w-full text-center'/>
        </form>
        <div  className=' w-full space-y-3 '>
            <div className='w-full border h-[88px] flex items-center gap-5 pl-5 rounded-[15px] border-[#EDEFF2]'>
                <FiMail className='bg-[#FFFBEF] p-3 text-[#E6B566] rounded-[100%]' size={45} />
                <a href="mailto:email@company.com" className='flex flex-col'> <span className='text-[#6B7280]'>Email</span> email@company.com</a>
            </div>
            <div className='w-full border h-[88px] flex items-center gap-5 pl-5 rounded-[15px] border-[#EDEFF2]'>
                <FaHeadset className='bg-[#FFFBEF] p-3 text-[#E6B566] rounded-[100%]' size={45} />
                <a href="" className='flex flex-col'> <span className='text-[#6B7280]'>Phone</span>(+1) 1234 567 891</a>
            </div>
            <div className='w-full border h-[88px] flex items-center gap-5 pl-5 rounded-[15px] border-[#EDEFF2]'>
                <FiMapPin className='bg-[#FFFBEF] p-3 text-[#E6B566] rounded-[100%]' size={45} />
                <a href="" className='flex flex-col'> <span className='text-[#6B7280]'>Address</span>760 Market St Floor 10, San Francisco, CA 94102, USA</a>
            </div>
            
        </div>
        </div>

    </section>
  )
}

export default Contact