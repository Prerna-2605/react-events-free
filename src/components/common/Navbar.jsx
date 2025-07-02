import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/svg/logo.svg'
import { navbar } from '../../utils/helper'
import Button from './Button'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 1);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isEventsPage = location.pathname === '/events';
    const isFeedPage = location.pathname === '/feed';
    const isUserPage = location.pathname === '/username';

    return (
        <nav className={`fixed top-0 w-full z-20 py-4 transition-all duration-300 ${isFeedPage || isUserPage ? 'bg-white shadow-2 ' : ''} ${scrolled ? 'bg-white shadow-lg ' : ''}  `}>
            <div className={`max-w-[1320px] mx-auto flex justify-between items-center ${isHomePage || isEventsPage ? 'bg-transparent' : ''} `}>
                <Link to={'/'} className='flex items-center'>
                    <img src={logo} alt="logo" />
                    <p className='font-poppins font-bold text-4xl text-[#2C49FE] '>
                        Events<span className='text-[#01C8FF] '>Free</span>
                    </p>
                </Link>

                <div className='flex items-center gap-14 '>
                    <div className='flex gap-10'>
                        {navbar.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.link == 'home' ? '/' : `/${item.link}`}
                                className={({ isActive }) => `px-3 py-2 cursor-pointer relative group uppercase font-normal text-base no-underline transition-all duration-300 hover:tracking-wider ${isActive ? 'opacity-100 text-stroke-1 ' : 'opacity-70'} ${(isHomePage || isEventsPage) ? (scrolled ? 'text-black' : 'text-white') : (scrolled ? 'text-black' : 'text-black')} `}>
                                {item.name}
                                {/* <span
                                    className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 bg-[#01C8FF] blur-lg opacity-40  z-[-1] pointer-events-none gooey"
                                // 🔁 CHANGED: Added inset-0, scale animation, blur, opacity, z-index, and pointer-events-none
                                ></span> */}
                                {/* Top-left corner */}
                                <span className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent transition-all duration-300 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#A6A6A6]"></span>
                                {/* Bottom-right corner */}
                                <span className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-transparent transition-all duration-300 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#A6A6A6]"></span>
                            </NavLink>
                        ))}
                    </div>
                    <Button className='py-[11px] px-7 ' text={'Log Out'} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar