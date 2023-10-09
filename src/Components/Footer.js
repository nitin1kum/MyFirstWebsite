import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaDiscord, FaFacebook, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <div className='w-screen  flex flex-col items-center'>
      <div className="short-poster w-3/5 grid grid-cols-2 bg-slate-100 px-12 py-8 rounded-md translate-y-1/2 shadow-md shadow-black scale-100 hover:scale-105 transition-all duration-1000">
        <div className=' short-poster-text justify-self-start self-center'>
          <p className=' text-gray-700 text-lg'>Ready to get started?</p>
          <p className=' text-gray-700 text-lg'>Talk to us today.</p>
        </div>
        <button className=' justify-self-end w-fit  mx-2 resize-none my-2 flex-shrink-0 bg-violet-500 px-6 py-2 rounded-lg text-lg  hover:bg-violet-600 hover:scale-95 transition-all hover:text-white duration-500 shadow-md  shadow-black opacity-90  capitalize'><NavLink to="/contact">Get Started</NavLink></button>
      </div>


      <div className="footer bg-indigo-700  w-screen flex justify-center">
        <div className="footer-grid grid grid-cols-4 py-24 w-3/5 gap-12 ">
        <div className='p-2 '>
          <h3 className='footer-heading'>Nitin Kumar</h3>
          <p className='footer-para'>Lorem ipsum dolor sit amet consectetur at qui.</p>
        </div>
        <div className='p-2 '>
          <h3 className='footer-heading'><span className=' whitespace-nowrap'>Subscibe to get important</span> updates</h3>
          <form action="https://formspree.io/f/xleylgrv" method='POST'>
            <input className='w-32 my-3 mr-6 border  border-gray-500 rounded text-xs p-2 focus:outline-1 focus:outline-gray-500' type="email" name="email" id="" required placeholder="Your Email" autoComplete="off" />
            <input className=' py-1  px-6 rounded-md my-2  bg-violet-500   text-lg  hover:bg-violet-600 hover:scale-95 transition-all hover:text-white duration-500 shadow-md  shadow-black opacity-90  capitalize ' type="submit" value="SEND" />
          </form>
        </div>
        <div className='p-2  '>
          <h3 className='footer-heading'>Follow Us</h3>
          <div className=' flex flex-nowrap'>
          <div className=' inline-block icon-block'>
            <FaDiscord className="icon"/>
          </div>
          <div className=' inline-block icon-block'>
            <FaInstagram className="icon"/>
          </div>
          <div className=' inline-block icon-block'>
            <FaFacebook className="icon"/>
          </div>
          </div>
        </div>
        <div className='p-2 '>
          <h3 className='footer-heading'>Call Us</h3>
          <h3 className='footer-heading'>+916397251185</h3>
        </div>
        </div>
      </div>

<hr />
      <div className=' footer-end w-screen bg-indigo-700 flex justify-center p-5 '>
        
        <div className='copyright-section grid grid-cols-2 w-3/5'>
        <p className='text-xs/8 font-semibold text-slate-300 whitespace-nowrap'>@{new Date().getFullYear()} Nitin Kumar. All Rights Reserved</p>
        <div className='flex flex-col items-center'>
          <p className='text-xs font-semibold text-slate-300'>Privacy Policy</p>
          <p className='text-xs/6 font-semibold text-slate-300'>Terms And Conditions</p>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer