
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'
const Navbar = () => {
    const [active, setActive] = useState(true)
    return (
        <nav>
            <div className='navIcon'>
                <ul className={active?'navList flex gap-16':'navList flex gap-16 active'}>
                    <li className='nav-item text-lg font-semibold hover:text-violet-400 transition-all uppercase  text-gray-500'>
                        <NavLink onClick={()=>{
                            setActive(true)
                        }} to="/">Home</NavLink>
                    </li>
                    <li className='nav-item text-lg font-semibold hover:text-violet-400 transition-all uppercase  text-gray-500'>
                        <NavLink onClick={()=>{
                            setActive(true)
                        }} to="/about">About</NavLink>
                    </li>
                    <li className='nav-item text-lg font-semibold hover:text-violet-400 transition-all uppercase  text-gray-500'>
                        <NavLink onClick={()=>{
                            setActive(true)
                        }} to="/services">Services</NavLink>
                    </li>
                    <li className='nav-item text-lg font-semibold hover:text-violet-400 transition-all uppercase  text-gray-500 mr-10' >
                        <NavLink onClick={()=>{
                            setActive(true)
                        }} to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className='relative mr-2 p-1 flex justify-center items-center'>
            <GiHamburgerMenu onClick={()=>{
                console.log(active)
                setActive(false)
            }}  className={active ? "hamburger h-8 w-8 hidden absolute ":"hamburger h-8 w-8 hidden absolute active"}/>
            <RxCross2 onClick={()=>{
                setActive(true)
            }}  className={active ? "cross h-8 w-8 hidden absolute active":'cross h-8 w-8 hidden absolute'  }/>
            </div>
        </nav>
    )
}

export default Navbar