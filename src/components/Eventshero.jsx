import React from 'react'
import bgimg from '../assets/webp/events-hero.webp'
import Breadcrumb from './common/Breadcrumb'

const Eventshero = () => {
    return (
        <div style={{ backgroundImage: `url(${bgimg})` }}>
            <div className='max-w-[1320px] px-3 mx-auto pt-[143px] pb-[50px]'>
                <Breadcrumb
                />

                <h1 className='font-poppins font-semibold text-[64px] max-lg:text-[58px] max-md:text-[50px] max-sm:text-[46px] text-white'>Events</h1>
            </div>
        </div>
    )
}

export default Eventshero