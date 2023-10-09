import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    
  return (
    <>
        <div className='h-screen w-screen flex justify-center items-center flex-col gap-20'>
            <div className=' h-1/2 w-1/2 overflow-hidden flex items-center justify-center'>
            <img className=' scale-105 object-cover' src="https://img.freepik.com/free-vector/glitch-error-404-page-background_23-2148090410.jpg?w=2000" alt="error" />
            </div>
            <NavLink to="/">
            <button className='mx-2 resize-none my-2 flex-shrink-0 bg-violet-500 px-6 py-2 rounded-lg text-xs  hover:bg-violet-600 hover:scale-95 transition-all hover:text-white duration-500 shadow-md  shadow-black opacity-90  capitalize'>
                Go Back
                </button>
            </NavLink>
        </div>
    </>
  )
}

export default Error