import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/svg/logo.svg'
import { navbar } from '../../utils/helper'
import Button from './Button'

const Navbar = () => {
    return (
        <nav className=' top-0 w-full'>
            <div className='max-w-[1320px] mx-auto flex justify-between items-center '>
                <Link to={'/'} className='flex items-center '>
                    <img src={logo} alt="logo" />
                    <p className='font-poppins font-bold text-4xl text-[#2C49FE] '>
                        Events<span className='text-[#01C8FF] '>Free</span>
                    </p>
                </Link>

                <div className='flex items-center gap-14 '>
                    <div className='flex gap-10'>
                        {navbar.map((item, index) => (
                            <div key={index} className='px-3 py-2 cursor-pointer relative group '>
                                {/* Gooey Blob Background */}
                                <span
                                    className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 bg-[#01C8FF] blur-lg opacity-40  z-[-1] pointer-events-none gooey"
                                // 🔁 CHANGED: Added inset-0, scale animation, blur, opacity, z-index, and pointer-events-none
                                ></span>
                                <NavLink
                                    to={item.link == 'home' ? '/' : `/${item.link}`}
                                    className={({ isActive }) => `uppercase font-poppins font-normal text-base ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                                    {item.link}
                                </NavLink>
                            </div>
                        ))}
                    </div>
                    <Button className='py-[11px] px-7 ' text={'Log Out'}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar