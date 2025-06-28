import React from 'react'
import blueline from '../assets/png/small-blue.png'
import Heading from './common/Heading'
import SmallText from './common/SmallText'
import { explore } from '../utils/helper'

const Explore = () => {
    return (
        <div className='max-w-[1320px] mx-auto mb-[163px] '>
            <div className="flex flex-wrap">
                <div className="w-[45%] px-3">
                    <img src={blueline} alt="image" draggable='false' className='mb-[9px] ' />

                    <Heading
                        text={'Explore our latest events'}
                        className='max-w-[338px] leading-[137%] mb-3 '
                    />

                    <SmallText
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu.'}
                        className='max-w-[543px] mb-[15px] '
                    />

                    <a href="" className='uppercase font-bold text-base '>
                        learn more
                    </a>
                </div>

                <div className="w-[55%] px-3 flex gap-[31px] ">
                    {explore.map((item, index) => (
                        <div className='pt-[10px] pb-6 px-3 rounded-[5px] hover:scale-[1.025] hover:shadow-1 transition-all duration-200 '>
                            <img src={item.image} alt="image" draggable='false' className='w-full mb-[13px] ' />

                            <SmallText
                                text={'09/23/2021'}
                                className='text-[14px] '
                            />

                            <p className='font-poppins font-medium text-2xl mb-[5px] '>
                                Lorem ipsum
                            </p>

                            <SmallText
                                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in '}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Explore