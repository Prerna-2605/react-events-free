import React from 'react'
import img from '../assets/webp/user-section1.webp'
import Heading from './common/Heading'
import Button from './common/Button'
import Description from './common/Description'
import { Username_Hero } from '../utils/helper'
import Breadcrumb from './common/Breadcrumb'

const UsernameHero = () => {
    return (
        <div className='max-w-[1320px] mx-auto pt-[165px] mb-[134px] px-3 '>
            <Breadcrumb
                className='mb-3 min-[1240px]:hidden '
            />

            <div className='flex flex-wrap justify-between max-[1240px]:gap-5 '>
                <div className='w-[33%] px-3 max-[1240px]:w-full '>
                    <img src={img} alt="image" className='max-[1240px]:w-[35%] max-md:w-[70%] max-sm:w-[60%] max-[425px]:!w-full mx-auto ' />
                </div>

                <div className='w-[65%] px-3 max-[1240px]:w-full '>
                    <Breadcrumb
                        className='mb-3 max-[1240px]:hidden '
                    />

                    <div className='flex justify-between mb-[29px] items-center max-[521px]:flex-col max-[521px]:gap-5 '>
                        <Heading
                            className='font-semibold '
                            text={'Jhone Doe'}
                        />

                        <div className='flex gap-3 items-center max-md:flex-col '>
                            <Button
                                className='py-[11px] px-7 bg-[#EAEDFF] !text-black whitespace-nowrap '
                                text={'Unshow Journey of Feed'}
                            />

                            <Button
                                className='py-[11px] px-7 bg-[#EAEDFF] !text-black whitespace-nowrap '
                                text={'Show Journey of Feed'}
                            />
                        </div>
                    </div>

                    <Description
                        className='min-[1240px]:max-w-[857px] leading-[1.5] mb-[38px] '
                        text={'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.'}
                    />

                    <div className='grid grid-cols-5 justify-between max-sm:grid-cols-3 max-sm:gap-4 max-[425px]:!grid-cols-2 '>
                        {Username_Hero.map((item, index) => (
                            <div key={index}>
                                <div className='flex gap-2 items-center '>
                                    <img src={item.icon} alt="image" />

                                    <Description
                                        text={item.data}
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

export default UsernameHero