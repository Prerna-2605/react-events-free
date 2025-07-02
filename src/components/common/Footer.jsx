import React from 'react'
import logo from '../../assets/svg/footer-logo.svg'
import { Link } from 'react-router-dom'
import SmallText from './SmallText'
import { footer, gallery, icons } from '../../utils/helper'

const Footer = () => {
    return (
        <footer className='bg-black '>
            <div className="max-w-[1320px] mx-auto px-3 ">
                <div className='flex flex-wrap pt-[81px] pb-[95px] justify-between items-center '>
                    <div className="w-1/3 px-3">
                        <Link to={'/'}>
                            <img src={logo} alt="logo" draggable="false" />
                        </Link>

                        <SmallText
                            className='text-white text-[14px] mt-9 mb-6 max-w-[346px] '
                            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. c '} />

                        <div className='flex gap-[15.41px] '>
                            {icons.map((items, index) => (
                                <a href={items.link} key={index} className='hover:-translate-y-1 transition-[translate] duration-200 '>
                                    <items.icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className='w-[47%] flex justify-between '>
                        {footer.map((items, index) => (
                            <ul key={index}>
                                <li className='font-poppins font-bold text-[14px] text-white mb-[11px] '>
                                    {items.title}
                                </li>
                                {items.list.map((link, i) => (
                                    <li key={i} className='mb-3'>
                                        <Link to={`/${link}`} className='font-poppins font-normal text-[12px] text-white '>
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ))}
                        {gallery.map((items, index) => (
                            <ul key={index}>
                                <li className='font-poppins font-bold text-[14px] text-white mb-[10px] '>
                                    {items.title}
                                </li>
                                <div className='grid grid-cols-3 gap-y-[13px] gap-x-[18px] '>
                                    {items.image.map((image, i) => (
                                        <div key={i} className='overflow-hidden relative'>
                                            <img src={image} alt="img" draggable="false" className='w-full hover:scale-[1.25] transition-all duration-200 ' />
                                            {i === items.image.length - 1 && (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <p className='font-poppins font-bold text-[12px] text-white '>
                                                        Show
                                                        <br />
                                                        More
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </ul>
                        ))}
                    </div>
                </div>

                <SmallText className='text-[14px] text-white text-center pb-[25px] ' text={'© Credits of companyName belong to companyName.'} />
            </div>
        </footer>
    )
}

export default Footer