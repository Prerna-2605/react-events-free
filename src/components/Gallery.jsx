import React from 'react'
import line from '../assets/png/very-small-blue.png'
import Heading from './common/Heading'
import { Grid } from '../utils/helper'

const Gallery = () => {
    return (
        <div className='max-w-[1320px] mx-auto mb-[67px] px-3 '>
            <img src={line} alt="image" className='block mx-auto ' />

            <Heading
                className='text-center leading-[1.5] mb-[55px] '
                text={'Gallery'}
            />

            <div className="grid grid-cols-3 gap-6 ">
                {Grid.map((image, index) => (
                    <div key={index} className={`overflow-hidden rounded-[30px] ${image.colSpan} ${image.rowSpan} `}>
                        <img src={image.img} alt="image" className='w-full hover:scale-[1.05] transition-all duration-200 ' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery