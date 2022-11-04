import React from 'react';
import { useState } from 'react';
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai";
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData ,setFormData] = useState({
    name: "",
    email : "",
    password : "",
  }); 

  const {name,email, password}  = formData;

  function onChange(e)
  {
    setFormData((prevState) =>( {
      ...prevState,
      [e.target.id] : e.target.value,

    }))
  }

  function onSubmit(e)
  {
    e.preventDefault()
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>

      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img src="https://images.unsplash.com/photo-1553991562-9f24b119ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80" alt="key" 
          className="w-full rounded-2xl"/>
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
        <form onSubmit={onSubmit}>
          <input type="text" id="name" value={name} onChange={onChange} placeholder="Enter your full name" className="mb-6 w-full px-4 py-2 text-xl text-gray-500 bg-white border-cyan-900 rounded transition ease-in-out" />
          <input type="email" id="email" value={email} onChange={onChange} placeholder="Enter your email address..." className="mb-6 w-full px-4 py-2 text-xl text-gray-500 bg-white border-cyan-900 rounded transition ease-in-out" />
          <div className="relative mb-6">
            <input className="w-full px-4 py-2 text-xl text-gray-500 bg-white border-cyan-900 rounded transition ease-in-out" type={showPassword ? "text" : "password"} id="password" value={password} onChange={onChange} placeholder="Enter your password..."/>
            {showPassword ? (
            <AiFillEyeInvisible className="absolute right-3 top-3 text-xl cursor-pointer" onClick={() => setShowPassword((prevState) =>!prevState)}/>
          ) : (<AiFillEye className="absolute right-3 top-3 text-xl cursor-pointer" onClick={() => setShowPassword((prevState) =>!prevState)} />)}
          </div>
          <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
            <p className="text-white mb-6 ">Have an account? 
              <Link to="/sign-in" className="text-[#4F311C] hover:text-[#947B66] transition duration-200 ease-linear ml-1"> Sign In</Link>
            </p>
            <p>
              <Link to="/forgot-password" className="text-[#9B2226] hover:text-[#B7094C] transition duration-200 ease-linear">Forgot password?</Link>
            </p>
          </div>
          <button className="w-full bg-[#8c5000] text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-[#8c4b00] transition duration-150 ease-in-out hover:shadow-lg active:bg-[#8c2100]" type="submit ">Sign up</button>
        <div className="my-4  items-center flex before:border-t  before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300 ">
          <p className="text-center font-semmibold mx-4 ">OR</p>
        </div>
        <OAuth />
        </form>
        </div>
      </div>
    </section>
  )
}
