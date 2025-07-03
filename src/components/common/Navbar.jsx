import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/svg/logo.svg'
import { navbar } from '../../utils/helper'
import Button from './Button'
import { Squash as Hamburger } from 'hamburger-react'

const Navbar = () => {
    const [state, setIsOpen] = useState(null)
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
    const showBlueBg = isFeedPage || isUserPage || scrolled;

    return (
        <nav className={`fixed top-0 w-full z-20 py-4 transition-all duration-300 ${isFeedPage || isUserPage ? 'bg-white shadow-2 ' : ''} ${scrolled ? 'bg-white shadow-lg ' : ''}  `}>
            <div className={`max-w-[1320px] mx-auto px-3 flex justify-between items-center ${isHomePage || isEventsPage ? 'bg-transparent' : ''} `}>
                <Link to={'/'} className='flex items-center'>
                    <img src={logo} alt="logo" />
                    <p className='font-poppins font-bold text-4xl text-[#2C49FE] max-[952px]:hidden '>
                        Events<span className='text-[#01C8FF] '>Free</span>
                    </p>
                </Link>

                <div className='flex items-center gap-14 '>
                    <div className={`flex gap-10 max-md:flex-col max-md:justify-center max-md:items-center max-md:bg-[#2C49FE] max-md:fixed max-md:top-0 max-md:w-[70%] max-md:h-screen max-md:transition-[right] max-md:duration-300 max-md:z-10 ${state === "show" ? 'max-md:right-0 ' : 'max-md:-right-full '}`}>

                        {navbar.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.link == 'home' ? '/' : `/${item.link}`}
                                className={({ isActive }) => {
                                    const baseStyle = 'px-3 py-2 cursor-pointer relative group uppercase font-normal text-base whitespace-nowrap transition-all duration-300 hover:tracking-widest';
                                    const activeStyle = isActive ? 'opacity-100 text-stroke-1' : 'opacity-70';

                                    let textColor = '';

                                    if (isHomePage || isEventsPage) {
                                        textColor = scrolled
                                            ? 'text-black max-md:text-white'
                                            : 'text-white max-md:text-white';
                                    } else if (isFeedPage || isUserPage) {
                                        textColor = 'text-black max-md:text-white'; // always black, even on mobile
                                    } else {
                                        textColor = 'text-black'; // fallback (optional)
                                    }

                                    return `${baseStyle} ${activeStyle} ${textColor}`;
                                }}>
                                {item.name}
                                {/* Top-left corner */}
                                <span className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent transition-all duration-300 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#A6A6A6]"></span>
                                {/* Bottom-right corner */}
                                <span className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-transparent transition-all duration-300 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-[#A6A6A6]"></span>
                            </NavLink>
                        ))}
                    </div>
                    <div className='flex items-center gap-4 '>
                        <Button className='py-[11px] px-7 ' text={'Log Out'} />
                        <div className='z-19 md:hidden '>
                            <Hamburger
                                toggled={state === 'show'}
                                toggle={() => setIsOpen(state === 'show' ? null : 'show')}
                                color={state === 'show' ? '#ffffff' : (showBlueBg ? '#2C49FE' : '#ffffff')}
                                rounded
                                size={36}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar