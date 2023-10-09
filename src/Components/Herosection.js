import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from './Context';


const Herosection = () => {
    const {name,scope,image}= useGlobalContext();
  return (
    <>
        <div className='hero-section-grid grid grid-cols-2 h-auto px-32 py-20 gap-x-5'>
            <div className="information p-5 flex flex-col justify-center items-start gap-4">
                <p className=' text-gray-400 text-lg capitalize'>this is me</p>
                <h1 className=' hero-name uppercase font-black text-5xl whitespace-nowrap'>{name}</h1>
                <p className=' text-gray-400 text-lg/6 text-justify'>I'm {scope}. Lorem ipsum dolor sit amet consectetur Enim cumque odit corporis eveniet similique minus autem explicabo maiores, aperiam voluptates earum possimus asperiores dolores omnis vel laborum nesciunt quae expedita, officia temporibus. Veniam error natus quia id. Omnis!</p>
                <button className=' text-lg bg-violet-500 px-6 py-2 rounded-lg hover:bg-violet-600 hover:scale-95 transition-all hover:text-white duration-500 shadow-md  shadow-black opacity-90 mt-4'><NavLink to="/contact">Hire Me</NavLink></button>
            </div>
            <div className="image flex justify-center items-center h-full p-5 ">
                <img className=' object-cover h-full ' src={image} alt="" />
            </div>
        </div>
    </>
  )
}

export default Herosection