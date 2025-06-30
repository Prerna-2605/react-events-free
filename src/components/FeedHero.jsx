import React from 'react'
import jhoneDoe from '../assets/webp/jhone.webp'
import Heading from './common/Heading'
import SmallText from './common/SmallText'
import { following } from '../utils/helper'
import More from './common/More'

const FeedHero = () => {
    return (
        <div className='max-w-[1320px] mx-auto mt-[165px]'>
            <div className='flex flex-wrap justify-between '>
                <div className='w-[30%] '>
                    <img src={jhoneDoe} alt="image" className='max-w-[401px] w-full' />
                </div>

                <div className='w-[68%] px-3'>
                    <Heading
                        text={"Jhone Doe"}
                        className='mb-4 font-semibold '
                    />

                    <SmallText
                        className='max-w-[857px] mb-[29px]'
                        text={"Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet."}
                    />
                    
                    <SmallText
                        className='font-semibold mb-[17px] '
                        text={'Following Events :'}
                    />
                    
                    <div className='gap-[20px] flex'>
                        {following.map((item, index) => (
                            <div key={index} className='rounded-[20px] flex gap-3 p-[13px] items-center shadow-3 max-w-[322px]'>
                                <img src={item.image} alt="image" />
                                <div>
                                    <p className='font-poppins font-bold text-base'>
                                        Augue etiam
                                    </p>
                                    <p className='font-poppins font-normal text-sm text-[#666666]'>
                                        Quis et id urna sagittis. Enim lacus, felis, libero sed nisl vitae blandit sociis.
                                    </p>
                                </div>
                            </div>
                        ))}
                        <More className='w-[171px] h-[138px] bg-[#EAEDFF] py-[30px] px-[55px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedHero