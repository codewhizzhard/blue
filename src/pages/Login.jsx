import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../services/blueBreedApi';

const Login = () => {

      const [showPassword, setShowPassword] = useState(false);
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const [login, {isLoading, error}] = useLoginMutation();

      const navigate = useNavigate();
  
      const handleLogin = async (e) => {
        console.log("loggings", isLoading)
        e.preventDefault();
        try {
          const result = await login({email: email, password: password}).unwrap();
          console.log("logged", isLoading)
          console.log("result",result);
          if (result.successful === true) {
            navigate('/clothings');
          }
        } catch (err) {
          console.log("login err", err?.data.message);
        } finally {
          console.log("logs", isLoading)
        }
      }
  return (
    <section className='h-[100%] flex flex-col justify-center items-center pb-36 pt-4'>
      <div className='md:w-[50%] space-y-4 w-[70%]'>
        <div className='space-y-2 flex flex-col items-center'>
        <h2 className='font-bold text-3xl'>WELCOME BACK</h2>
        <p className='text-[#606060]'>Welcome back, enter your credentials to access your account</p>
      </div>
      <form className='space-y-5 text-[#606060]' onSubmit={handleLogin}>
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
                <button type='button'  onClick={() => setShowPassword(!showPassword)} className='absolute right-4 bottom-2'>{showPassword ? <FiEye size={23}  /> :  <FiEyeOff size={23} />}</button>
                
            </div>
            <button type="submit" className='w-full bg-[#E6B566] py-2 rounded text-white' >
                Next
          </button>
      </form>
      <div className='flex items-center gap-4'>
            <hr className='flex-grow'/>
            <span className='pb-[6px]'>or</span>
            <hr className='flex-grow'/>
        </div>
            <div className='border w-full text-center p-2 rounded text-black font-medium'>Continue with Google</div>
            <p className='text-center'>Don't have an account?<button type="button" className='text-[#E6B566] pl-1  z-50'><Link to={"/signup"}> Signup </Link> </button></p>          
  
      </div>
        </section>
  )
}

export default Login