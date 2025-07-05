import React from 'react'
import jhoneDoe from '../assets/webp/jhone.webp'
import Heading from './common/Heading'
import Description from './common/Description'
import { following } from '../utils/helper'
import More from './common/More'
import Breadcrumb from './common/Breadcrumb'

const FeedHero = () => {
    return (
        <div className='max-w-[1320px] mx-auto px-3 mt-[165px]'>
            <Breadcrumb
                className='mb-3 min-[1139px]:hidden'
            />

            <div className='flex flex-wrap justify-between items-center max-[1129px]:flex-col '>
                <div className='w-[30%] max-[1129px]:w-full '>
                    <img src={jhoneDoe} alt="image" draggable='false' className='min-[1129px]:max-w-[401px] w-full max-[1129px]:w-[40%] max-[1129px]:mb-4 mx-auto max-sm:w-[65%] max-[375px]:!w-full ' />
                </div>

                <div className='w-[68%] px-3 max-[1129px]:w-full '>
                    <Breadcrumb
                        className='mb-3 max-[1129px]:hidden '
                    />

                    <Heading
                        text={"Jhone Doe"}
                        className='mb-4 font-semibold '
                    />

                    <Description
                        className='min-[1129px]:max-w-[857px] mb-[29px]'
                        text={"Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet."}
                    />

                    <Description
                        className='font-semibold mb-[17px] '
                        text={'Following Events :'}
                    />

                    <div className='gap-[20px] flex items-end max-[375px]:flex-col '>
                        {following.map((item, index) => (
                            <div key={index} className='rounded-[20px] flex gap-3 p-[13px] items-center shadow-3 max-w-[322px] max-md:flex-col '>
                                <img src={item.image} alt="image" draggable='false' className='w-full max-md:w-1/3 max-[515px]:!w-1/2 max-[375px]:!w-1/3 ' />
                                <div>
                                    <p className='font-poppins font-bold text-base max-md:text-center '>
                                        Augue etiam
                                    </p>
                                    <Description
                                        text={'Quis et id urna sagittis. Enim lacus, felis, libero sed nisl vitae blandit sociis.'}
                                        className='!text-[13px] max-md:text-center '
                                    />
                                </div>
                            </div>
                        ))}
                        <More className='w-[171px] h-[138px] bg-[#EAEDFF] py-[30px] px-[55px] max-[595px]:hidden ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedHero