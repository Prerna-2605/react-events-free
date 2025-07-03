import React from 'react'
import section1bg from '../assets/webp/conference.webp'
import blueline from '../assets/png/big-blue.png'
import SmallText from './common/SmallText'
import Button from './common/Button'
import { bluebox } from '../utils/helper'
import { Link } from 'react-router-dom'

const Homehero = () => {
    return (
        <div className='bg-center bg-cover bg-no-repeat pb-[104px] ' style={{ backgroundImage: `url(${section1bg})` }} >
            <div className='max-w-[1320px] mx-auto pt-[256px] max-md:pt-50 px-3 '>
                <h1 className='font-poppins font-bold text-[64px] max-lg:text-[58px] max-md:text-[50px] max-sm:text-[46px] text-white max-w-[1044px] leading-[150%] mb-[18px] '>
                    Sed tortor in <span className='relative inline-block '>
                        quisque morbi
                        <img src={blueline} alt="img" className='absolute -bottom-2 right-0 ' />
                    </span> scelerisque etiam eu.

                </h1>

                <SmallText
                    className='max-w-[765px] font-yantra text-[20px] text-white mb-[33px] '
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,'} />

                <div className='flex gap-[23px] items-center mb-[145px] '>
                    <Button
                        text={'Get Started'}
                        className='py-[11px] px-7 text-[20px] max-sm:text-[18px] max-sm:py-[9px] max-sm:px-6 leading-[150%] ' />

                    <Link className='font-poppins font-normal text-[20px] max-sm:text-[18px] text-white hover:tracking-wider transition-all duration-300 '>
                        Learn more
                    </Link>
                </div>

                <div className='flex py-[17px] px-[23px] justify-between items-center max-w-[962px] bg-[#2C49FEBD] rounded-[150px] max-[426px]:rounded-[110px] max-md:grid max-md:grid-cols-2 max-[426px]:!grid-cols-1 max-md:gap-5 '>
                    {bluebox.map((items, index) => (
                        <React.Fragment key={index}>
                            <div className='flex max-md:justify-center '>
                                <div className='flex gap-[21px] items-center '>
                                    <items.icon />
                                    <div>
                                        <p className='font-yantra font-medium text-[20px] text-white '>
                                            {items.head}
                                        </p>
                                        <p className='font-yantra font-normal text-[14px] text-[#FFFFFFB2] '>
                                            {items.subhead}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-[2px] h-[74px] border-white max-md:hidden "></div>
                        </React.Fragment>
                    ))}

                    <div className='flex max-md:justify-center '><Button className='py-5 px-10 bg-white !text-[#2C49FE] uppercase !font-bold text-[20px] max-w-[185px] max-sm:px-8 max-sm:py-4 max-sm:text-[18px] ' text={'go check'} /></div>
                </div>
            </div>
        </div>
    )
}

export default Homehero