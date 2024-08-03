import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const RegistionPage = () => {
  return (
    <>
    <div className=" flex ">
       
        <div className="warper font-poppins rounded-[12px] ">
        <form >
          <h1 className=" text-[35px] text-center font-poppins font-semibold ">
          Register
          </h1>
          <div className="inputBox">
            <input
              type="text"
          
              placeholder="Your first name"
            />
          
            
          </div>
          <div className="inputBox">
            <input
              type="text"
          
              placeholder="Your last name"
            />
          
            
          </div>
          <div className="mb-8"><p className="pl-5 text-[#8bcfff] text-[12px] " >  </p></div>
          


          <div className="inputBox">
            <input type='password' placeholder="Password  " />
            
          </div>
          <div className="inputBox">
            <input type='password' placeholder=" Confirm password " />
            
          </div>
          <div className="mb-8"><p className="pl-5 text-[#8bcfff] text-[12px] " >  </p></div>
       
          <button
            type="submit"
            className=" w-full h-[45px] active:scale-105 transition-all border-none outline-none shadow-md cursor-pointer text-[17px] text-[#333] font-semibold rounded-[40px] text-black bg-white "
          >
            Sing Up
          </button>
          <div className="w-full flex mt-10 items-center gap-3 justify-center ">
            <div className="w-40 h-[2px] bg-white  "></div>
            <div className=""><p>Or</p></div>
            <div className="w-40 h-[2px] bg-white  "></div>
          </div>
          <div className="w-full gap-10 justify-center mt-5 mb-12 flex">
            <div className=" w-7 h-7 "><a href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Fhl%3Den%26utm_source%3DOGB%26utm_medium%3Dact&ec=GAlAwAE&hl=en&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1108304790%3A1721147554738150&ddm=0"><img src="photos/search.png" alt="link" /></a></div>
            <div className=" w-7 h-7 "><a href="https://web.facebook.com"><img src="photos/facebook.png" alt="link" /></a></div>
            <div className=" w-7 h-7 "><a href="https://x.com"><img src="photos/twitter.png" alt="link" /></a></div>
            <div className=" w-7 h-7 "><a href="https://www.icloud.com/"><img src="photos/apple-logo.png" alt="link" /></a></div>
          </div>
          <div className="registerlink text-[15px] text-center mt-5 ">
            <p>
              Already have an account ?{" "}
              <a className="  " href="/">
                Login 
              </a>
            </p>
          </div>
        </form>
      </div>
      </div>
      
    </>
  )
}

export default RegistionPage
