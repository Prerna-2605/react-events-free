import React from 'react'
import blueline from '../assets/png/small-blue.png'
import Heading from './common/Heading'
import SmallText from './common/SmallText'
import { explore } from '../utils/helper'
import { Link } from 'react-router-dom'

const Explore = () => {
    const date = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: '2-digit',
        year: 'numeric',
    });

    return (
        <div className='max-w-[1320px] mx-auto mb-[163px] max-[945px]:mb-[122px] px-3 '>
            <div className="flex flex-wrap max-lg:flex-col max-lg:gap-5 ">
                <div className="w-[45%] max-lg:w-full px-3 max-lg:flex max-lg:flex-col ">
                    <img src={blueline} alt="image" draggable='false' className='mb-[9px] max-lg:mx-auto ' />

                    <Heading
                        text={'Explore our latest events'}
                        className='lg:max-w-[338px] leading-[137%] mb-3 max-lg:text-center '
                    />

                    <SmallText
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu.'}
                        className='lg:max-w-[543px] mb-[15px] max-lg:text-center '
                    />

                    <Link className='uppercase font-bold text-base hover:tracking-wider transition-all duration-300 max-lg:mx-auto '>
                        learn more
                    </Link>
                </div>

                <div className="w-[55%] max-lg:w-full px-3 flex gap-[31px] justify-center items-center max-[515px]:flex-col ">
                    {explore.map((item, index) => (
                        <div key={index} className='max-lg:max-w-[336px] pt-[10px] pb-6 px-3 rounded-[5px] hover:scale-[1.025] hover:shadow-1 transition-all duration-200 '>
                            <img src={item.image} alt="image" draggable='false' className='w-full mb-[13px] ' />

                            <SmallText
                                text={date}
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