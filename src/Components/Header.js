import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
     <header className=' bg-gray-200 h-12 w-screen flex p-12 justify-between items-center'>
     <NavLink  to="/">
      <img className='shadow-md shadow-gray-500 h-auto max-h-12 hover:scale-125 transition-all  duration-1000' src="https://api.freelogodesign.org/assets/thumb/logo/e847c155ef144af183a83816989376df_400.png" alt="" />
      </NavLink>
      <Navbar/>
     </header>
    </>
  )
}

export default Header