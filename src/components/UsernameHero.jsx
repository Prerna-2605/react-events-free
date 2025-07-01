import React from 'react'
import img from '../assets/webp/user-section1.webp'
import Heading from './common/Heading'
import Button from './common/Button'
import SmallText from './common/SmallText'
import { Username_Hero } from '../utils/helper'

const Usernamehero = () => {
    return (
        <div className='max-w-[1320px] mx-auto pt-[165px] mb-[134px] '>
            <div className='flex flex-wrap justify-between '>
                <div className='w-[33%] px-3 '>
                    <img src={img} alt="image" />
                </div>

                <div className='w-[65%] px-3 '>
                    <div className='flex justify-between mb-[29px] '>
                        <Heading
                            className='font-semibold '
                            text={'Jhone Doe'}
                        />

                        <div className='flex gap-3 items-center '>
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

                    <SmallText
                        className='max-w-[857px] mb-[38px] '
                        text={'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.'}
                    />

                    <div className='flex justify-between max-w-[572px] '>
                        {Username_Hero.map((item, index) => (
                            <div key={index}>
                                <div className='flex gap-2 items-center '>
                                    <img src={item.icon} alt="image" />

                                    <SmallText
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

export default Usernamehero