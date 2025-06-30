import React from 'react'
import Heading from './common/Heading'
import line from '../assets/png/small-blue.png'
import { Events } from '../utils/helper'
import Button from './common/Button'

const ChooseEvent = () => {
    return (
        <div className='max-w-[1320px] mx-auto pt-17 mb-[155px]'>
            <img src={line} alt="image" className='block mx-auto' />
            <Heading text={"Choose your next event"} className='text-center mb-[33px]' />

            <div className='grid grid-cols-3 gap-[25px]'>
                {Events.map((item, index) => (
                    <div key={index} className='border border-[#CCCCCC] rounded-[30px] pt-[35px] pb-[30px] px-10 transition-all duration-200 hover:border-transparent hover:shadow-3'>
                        <img src={item.image} alt="image" className='rounded-[20px] w-full' />
                        <h3 className='font-poppins font-semibold text-2xl mt-[21px] mb-3'>{item.title} </h3>
                        {item.details.map((info, i) => (
                            <div key={i} className='flex items-center gap-2 mb-[17px]'>
                                <img src={info.svg} alt="image" />
                                <p className='font-poppins font-nomal text-base text-[#666666] '>{info.text} </p>
                            </div>
                        ))}
                        <Button text={"Go Check"} className='py-[11px] px-7 ' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChooseEvent