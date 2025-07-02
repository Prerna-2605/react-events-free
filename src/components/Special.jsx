import React from 'react'
import television from '../assets/webp/television.webp'
import blueline from '../assets/png/small-blue.png'
import Heading from './common/Heading'
import SmallText from './common/SmallText'
import { special } from '../utils/helper'

const Special = () => {
    return (
        <div className='max-w-[1320px] mx-auto mt-[137px] mb-[73px] px-3 '>
            <div className="flex flex-wrap">
                <div className="w-1/2 px-3">
                    <img src={television} alt="image" draggable='false' />
                </div>

                <div className="w-1/2 px-3">
                    <img src={blueline} alt="image" draggable='false' className='mb-[21px] ' />

                    <Heading
                        text={'What make us special ?'}
                        className='mb-4'
                    />

                    <SmallText
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,'}
                        className='mb-[46px] '
                    />

                    <div className='grid grid-cols-2 gap-y-[37px] gap-x-9 '>
                        {special.map((items, index) => (
                            <div key={index} className={`relative flex justify-center ${special.length % 2 !== 0 && index === special.length - 1 ? 'col-span-2 mx-auto' : ''}`}>
                                <div className='size-[79px] max-w-[79px] w-full border-[2px] border-[#2C49FE] bg-white z-1 rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                                    <img src={items.icon} alt="icon" />
                                </div>

                                <div className='px-5 pt-[45px] pb-[17px] border border-[#2C49FE] rounded-[5px] max-w-[260px] group hover:bg-[#2C49FE] transition-colors duration-200 '>
                                    <p className='font-poppins font-medium text-[25px] text-[#2C49FE] capitalize text-center group-hover:text-white transition-colors duration-200 '>
                                        {items.head}
                                    </p>

                                    <SmallText
                                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in '}
                                        className='text-center !text-[#2C49FE] group-hover:!text-white transition-colors duration-200 '
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Special