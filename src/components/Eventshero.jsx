import React from 'react'
import bgimg from '../assets/webp/events-hero.webp'

const Eventshero = () => {
    return (
        <div style={{ backgroundImage: `url(${bgimg})` }}>
            <div className='max-w-[1320px] px-3 mx-auto'>
                <h1 className='font-poppins font-semibold text-[64px] text-white pt-[143px] pb-[50px]'>Events</h1>
            </div>
        </div>
    )
}

export default Eventshero