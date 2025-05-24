import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        e.preventDefault();
    }


  return (
    <section className='h-[100%] flex flex-col justify-center items-center pb-36 pt-4'> {/* /mt-10 */}
        <div className='md:w-[50%] space-y-4 w-[70%]'>
            <div className='space-y-2 flex flex-col items-center'>
            <h2 className='font-bold text-3xl'>Sign up with BlueBreeds</h2>
            <span className='text-[#606060]'>Where Fashion Meets Interior Elegance</span>
        </div>
        <form  className='space-y-3 text-[#606060]' onSubmit={handleSubmit}>
                <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" className='w-full border p-2 rounded outline-none'  placeholder='eg.email.gmail.com'
                    required
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    
                />
            </div>
            <div className='relative'>
                <label htmlFor="password">Password</label>
                <input type={showPassword ? "text" : "password"}  className='w-full border p-2 rounded outline-none' placeholder='Enter Password'
                    id='password'
                    name='passwword'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={() => setShowPassword(!showPassword)} className='absolute right-4 bottom-2'>{showPassword ? <FiEye size={23}  /> :  <FiEyeOff size={23} />}</button>
                
            </div>
            <p className='mt-4'>By registering for an account, you are consenting to our <span className='underline decoration-0 text-[#E6B566]'>Terms of Service</span> and confirming that you have reviewed and accepted the <span className='text-[#E6B566]'>Global Privacy Statement.</span></p>
            <button type="submit" className='w-full bg-[#E6B566] py-2 rounded text-white' >
                Next
            </button>
        </form>
        <div className='flex items-center gap-4'>
            <hr className='flex-grow'/>
            <span className='pb-[6px]'>or</span>
            <hr className='flex-grow'/>
        </div>
        
            <div className='border w-full text-center p-2 rounded'>Continue with Google</div>
        <p className='text-center'>Already have an account?<button type="button" className='text-[#E6B566] pl-1'><Link to={"/login"}> Login </Link> </button></p>
     
        </div>
        
    </section>
  )
}
