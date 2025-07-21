import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import CashOutSchema from './cashoutSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import bespoke from "../../assets/bespoke.png";
import {  useOrderMutation } from '../../services/blueBreedApi';

const CashOut = () => {

    const {register: cashOutRegister, handleSubmit, formState: {errors: cashOutErrors, isSubmitting: cashOutSubmitting}, reset: cashOutReset} = useForm({resolver: zodResolver(CashOutSchema)});

    const [getProductsByCategory, {error: orderError, isLoading: orderLoading}] = useOrderMutation()


    const handleCahOut = async(data) => {
       
        console.log("dd: ", data)
        try {
            const res = await getProductsByCategory({data})
            console.log("res:", res)


        } catch (err) {
                console.log("err:", err)
        }
    }
    const onInvalid = (errors) => {
  console.error("Validation Errors:", errors);
};
   // handleCahOut()

  return (
    <form className='px-5 pb-10 pt-6' onSubmit={handleSubmit(handleCahOut, onInvalid)}>
        <span className=' flex gap-3 items-center text-[#807D7E] '>Home <FaChevronRight size={14} className='pt-1 text-[#807D7E] text-[18px] font-medium'/> <span className='text-[#807D7E]'>Product Details</span> <FaChevronRight size={14} className='pt-1 text-[#807D7E] text-[18px] font-medium'/> <span className='text-[#3C4242]'> Check Out</span> </span>
        <div className='w-full h-full flex md:flex-row-reverse flex-col gap-10 pt-8'>

            <div className='border border-[#EDEFF2]  px-4 py-4 flex flex-col space-y-4 md:w-[30%] rounded-[11px] h-fit text-[18px] font-bold'>
                
                <h1 className='text-[24px] font-semibold text-[#3C4242]'>Order Summary</h1>
                <hr className=' text-[#EDEEF2]'/>
                <div className='flex '>
                    <div><img src={bespoke} alt="" /></div>
                    <span className='flex flex-col'>
                        <p className='text-[14px]'>cocoa</p>
                        <p className='text-[14px]'>cocoa</p>
                    </span>
                    <span></span>
                </div>
                <div className='flex flex-col gap-3'>
                    <span className='flex justify-between'>
                        <span>Subtotal</span>
                        <span>555</span>
                    </span>
                    <span className='flex justify-between'>
                        <span>Shipping</span>
                        <span>Free</span>
                    </span>
                </div>
                <hr className=' text-[#EDEEF2]'/>
                <span className='flex justify-between'>
                        <span>Shipping</span>
                        <span>Free</span>
                </span>
                <hr  className=' text-[#EDEEF2]'/>
                <span className='flex justify-between'>
                        <span>Total</span>
                        <span>Free</span>
                </span>
                </div>

            {/* <div className='w-full flex md:flex-row flex-col-reverse justify-between'> */}
            <div className='flex-grow md:w-70 w-full space-y-10' >

                 <div className='w-full flex flex-col space-y-6'>
                    <span className='flex items-center gap-3'>
                        <span className='bg-[#E6B566] rounded-[10px] w-[6px] h-7'></span> <h1 className='text-[28px] font-semibold text-[#3C4242]'> Check Out</h1>
                    </span>
                    <h2 className='font-semibold text-[22px]'>Personal Information</h2>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-col gap-4 w-full'>
                            <label htmlFor="" className="text-black font-semibold text-4">First Name*</label>
                            <input type="text" name="" id="" className='text-[14px] rounded-[8px] w-full px-4 py-3 outline-none bg-[#F6F6F6]'  placeholder='First Name' {...cashOutRegister("userDetails.firstName")}/>
                             {cashOutErrors?.userDetails?.firstName && <p className='text-red-500 text-[12px]'>{cashOutErrors.userDetails.firstName.message}</p>} 
                        </div>
                        <div className='flex flex-col gap-4 w-full'>
                            <label htmlFor="" className="text-black font-semibold text-4">Last Name*</label>
                            <input type="text" name="" id="" className='text-[14px] rounded-[8px] w-full px-4 py-3 outline-none bg-[#F6F6F6]'  placeholder='Last Name' {...cashOutRegister("userDetails.lastName")}/>
                            {cashOutErrors?.userDetails?.lastName && <p className='text-red-500 text-[12px]'>{cashOutErrors.userDetails.lastName.message}</p>} 
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-col gap-4 w-full'>
                            <label htmlFor="" className="text-black font-semibold text-4">Country / Region*</label>
                            <input type="text" name="" id="" className='text-[14px] rounded-[8px] w-full px-4 py-3 outline-none bg-[#F6F6F6]'  placeholder='Country / Region' {...cashOutRegister("userDetails.country")}/>
                            {cashOutErrors?.userDetails?.country && <p className='text-red-500 text-[12px]'>{cashOutErrors.userDetails.country.message}</p>} 
                        </div>
                        {/* <div className='flex flex-col gap-4 w-full'>
                            <label htmlFor="" className="text-black font-semibold text-4">Email Address*</label>
                            <input type="text" name="" id="" className='text-[14px] rounded-[8px] w-full px-4 py-3 outline-none bg-[#F6F6F6]'  placeholder='Email Address' {...cashOutRegister("userDetails.country")}/>
                            {cashOutErrors?.userDetails?.country && <p className='text-red-500 text-[12px]'>{cashOutErrors.userDetails?.country.message}</p>} 
                        </div> */}
                    </div>
                    <div className='flex flex-col gap-4 md:w-[50%] w-full'>
                        <label htmlFor="" className="text-black font-semibold text-4">Phone Number*</label>
                        <input type="text" name="" id="" className='text-[14px] rounded-[8px] w-full px-4 py-3 outline-none bg-[#F6F6F6]'  placeholder='phone ' {...cashOutRegister("userDetails.phoneNumber")}/>
                         {cashOutErrors?.userDetails?.phoneNumber && <p className='text-red-500 text-[12px]'>{cashOutErrors.userDetails.phoneNumber.message}</p>} 
                    </div>
                    <span className='flex items-center gap-3'>
                        <input type="checkbox" className='h-[18px] w-[18px]' {...cashOutRegister("saveUserDetails")}/>
                        <p className='text-[18px] text-[#3C4242]'>Save my information for a faster checkout</p>
                    </span>
                </div> 


                <hr  className=' text-[#EDEEF2]'/>
                {/* </div> */}
                <div className='flex flex-col space-y-4'>
                    <div className='md:w-[50%] w-full space-y-1'>
                        <h2 className='text-[22px] font-semibold text-[#3C4242]'>Shipping Address</h2>
                        <p>Select the address that matches your card or payment method.</p>
                    </div>

                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-col gap-4 w-full'>
                            <label htmlFor="" className="text-black font-semibold text-4">Street Address*</label>
                            <input type="text" name="" id="" className='text-[14px] rounded-[8px] w-full px-4 py-3 outline-none bg-[#F6F6F6]'  placeholder='House number and street name' {...cashOutRegister("shippingAddress.streetAddress")}/>
                            {cashOutErrors?.shippingAddress?.streetAddress && <p className='text-red-500 text-[12px]'>{cashOutErrors.shippingAddress.streetAddress.message}</p>}   
                        </div>
                        <div className='flex flex-col gap-4 w-full'>
                            <label htmlFor="" className="text-black font-semibold text-4">Apt, suite, unit*</label>
                            <input type="text" name="" id="" className='text-[14px] rounded-[8px] w-full px-4 py-3 outline-none bg-[#F6F6F6]'  placeholder='apartment, suite, unit, etc. (optional)' {...cashOutRegister("shippingAddress.appartmentSuiteOrUnit")}/>
                              {cashOutErrors?.shippingAddress?.appartmentSuiteOrUnit && <p className='text-red-500 text-[12px]'>{cashOutErrors.shippingAddress.appartmentSuiteOrUnit.message}</p>}   
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-col gap-4 w-full'>
                            <label htmlFor="" className="text-black font-semibold text-4">City*</label>
                            <input type="text" name="" id="" className='text-[14px] rounded-[8px] w-full px-4 py-3 outline-none bg-[#F6F6F6]'  placeholder='Town / City' {...cashOutRegister("shippingAddress.city")}/>
                             {cashOutErrors?.shippingAddress?.city && <p className='text-red-500 text-[12px]'>{cashOutErrors.shippingAddress.city.message}</p>}   
                        </div>
                        <div className='flex flex-col gap-4 w-full'>
                            <label htmlFor="" className="text-black font-semibold text-4">State*</label>
                            <input type="text" name="" id="" className='text-[14px] rounded-[8px] w-full px-4 py-3 outline-none bg-[#F6F6F6]'  placeholder='State' {...cashOutRegister("shippingAddress.state")}/>
                            {cashOutErrors?.shippingAddress?.state && <p className='text-red-500 text-[12px]'>{cashOutErrors.shippingAddress.state.message}</p>}   
                        </div>
                        <div className='flex flex-col gap-4 w-full'>
                            <label htmlFor="" className="text-black font-semibold text-4">Postal Code*</label>
                            <input type="text" name="" id="" className='text-[14px] rounded-[8px] w-full px-4 py-3 outline-none bg-[#F6F6F6]'  placeholder='Postal Code' {...cashOutRegister("shippingAddress.postalCode")}/>
                            {cashOutErrors?.shippingAddress?.postalCode && <p className='text-red-500 text-[12px]'>{cashOutErrors.shippingAddress.postalCode.message}</p>}   
                        </div>
                    </div>
                </div>
                <hr  className=' text-[#EDEEF2]'/>

                <div className='flex flex-col space-y-4'>
                    <h2 className='text-[22px] font-semibold text-[#3C4242]'>Shipping Address</h2>
                    <div className='bg-[#F6F6F6] rounded-[8px] px-6 py-5 flex flex-col justify-between space-y-4'>
                        <p className='text-[20px] font-bold'>Arrives by Monday, June 7</p>
                        <hr  className=' text-[#EDEEF2] bg-[EDEEF2]'/>
                        <span>
                            <p className='text-[20px] font-bold'>Delivery Charges</p>
                            <p className='font-medium text-[#807D7E] text-[16px]'>Additional fess may apply</p>
                        </span>
                    </div>
                </div>

                <div>
                    <h2 className='text-[22px] font-semibold text-[#3C4242]'>Payment Method</h2>
                    <p className='text-[#3C4242] text-[16px]'>All transactions are secure and encrypted.</p>
                    <div className='bg-[#F6F6F6] rounded-[8px] px-6 py-5 flex flex-col justify-between space-y-8'>

                        <div className='flex flex-col md:flex-row gap-8 '>
                                <input type="text" name="" id="" className='text-[14px] rounded-[8px] w-full px-5 py-4 outline-none bg-[#F6F6F6] border border-[#3C4242]'  placeholder='Card Number'/>
                                <input type="text" name="" id="" className='text-[14px] rounded-[8px] w-full px-5 py-4 outline-none bg-[#F6F6F6] border border-[#3C4242]' placeholder='Name on Card'/>
                        </div>

                        <div className='flex flex-col md:flex-row gap-8  '>
                                <input type="text" name="" id="" className='text-[14px] rounded-[8px] w-full px-5 py-4 outline-none bg-[#F6F6F6] border border-[#3C4242]' placeholder='Expiration date (MM/YY)'/>
                           
                                <input type="text" name="" id="" className='text-[14px] rounded-[8px] w-full px-5 py-4 outline-none bg-[#F6F6F6] border border-[#3C4242]' placeholder='Security Code' />
                        
                        </div>
                   
                    </div>
                </div>

            </div>
               
            
        </div>
        <button className='bg-[#E6B566] py-4 px-5 rounded-[8px] mt-10 cursor-pointer' type='submit'>Pay Now</button>
    </form>
  )
}

export default CashOut