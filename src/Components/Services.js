import React, { useEffect } from 'react'
import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom';

const Services = () =>{
  const { sources } = useGlobalContext();
  return (
    <>
      <div className='service-grid-container flex flex-col justify-center items-center px-32 py-20'>
        <h1 className='text-5xl font-bold m-10 whitespace-nowrap'>Our Services</h1>
        <div className='service-grid grid grid-flow-row grid-cols-3 gap-8 '>
          {
            sources.map((elem, e) => {
              if(e<9){
                return <div className=' flex flex-col justify-center items-center    border-2 min-h-96 my-5 ' key={e}>
                <div className='service-image-container  items-center flex justify-center relative overflow-hidden '>
                  <img key={e}  className='service-image object-fill h-full scale-95 transition-all duration-300' src={elem.download_url} alt="" />
                  <div className=' cover absolute top-0 left-0 h-full w-6 transition-all duration-300 '></div>
                </div>
                <p className='para text-gray-400 text-sm my-2 mx-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rerum illo maxime tempora. Doloremque, rem?</p>
                <button className='text-sm mx-4 resize-none my-2 flex-shrink-0 bg-violet-500 px-4 py-2 w-fit   hover:bg-violet-600 hover:scale-95 transition-all hover:text-white duration-500 shadow-md  shadow-black opacity-90  capitalize'>
                  <NavLink to="/contact">read more</NavLink>
                </button>
              </div>
              }
            })
          }
        </div>
      </div>

    </>
  )
}

export default Services