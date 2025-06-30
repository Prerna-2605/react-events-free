import React from 'react'
import Heading from './common/Heading'
import More from './common/More'
import line from '../assets/png/small-blue.png'
import { Post_Data, Username } from '../utils/helper'
import profile1 from '../assets/svg/profile1.svg'
import SmallText from './common/SmallText'
import date from '../assets/svg/date.svg'
import { COMMENT, DELETE, LIKE } from '../utils/Icons'
import img1 from '../assets/png/newpost1.png'
import img2 from '../assets/png/newpost2.png'
import img3 from '../assets/png/newpost3.png'
import img4 from '../assets/png/newpost4.png'

const NewPost = () => {
    return (
        <div className='max-w-[1320px] mx-auto'>
            <img src={line} alt="line" className='mt-[76px]' />

            <Heading
                text={"New Posts"}
                className='font-semibold leading-[150%] mb-[30px] ' />

            <div className='p-[34px] shadow-3 rounded-[30px] mb-[45px] '>
                {Username.map((item, index) => (
                    <div key={index} className='flex flex-wrap mb-[33px] '>
                        <div className='w-[49%] px-3'>
                            <div className='flex gap-[23px] items-center mb-[45px] '>
                                <img src={profile1} alt="profile" />

                                <div>
                                    <SmallText
                                        text={item.name}
                                        className='font-semibold !text-2xl leading-[150%] text-black '
                                    />

                                    <SmallText
                                        text={item.postname}
                                        className='text-[#666666] '
                                    />
                                </div>
                            </div>

                            <SmallText
                                text={item.title}
                                className='font-semibold !text-2xl text-black leading-[150%] mb-2 '
                            />

                            <div className='flex gap-2 mb-5'>
                                <img src={date} alt="image" />

                                <SmallText
                                    text={'10/02/2022'}
                                    className='text-[#666666] '
                                />
                            </div>

                            <SmallText
                                text={item.description1}
                                className='text-[#666666] max-w-[553px] mb-[13px] '
                            />

                            <SmallText
                                text={item.description2}
                                className='text-[#666666] max-w-[553px] mb-[26px] '
                            />

                            <div className='flex gap-10 '>
                                <div className='flex gap-2 items-center'>
                                    <LIKE />

                                    <SmallText
                                        text={'10'}
                                        className='text-[#666666] '
                                    />
                                </div>

                                <div className='flex gap-2 items-center'>
                                    <COMMENT />

                                    <SmallText
                                        text={'3'}
                                        className='text-[#666666] '
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='w-[51%] px-3'>
                            <div className='grid grid-cols-2 gap-x-[30px] gap-y-[10px]'>
                                <div>
                                    <img src={img1} alt="image" />
                                </div>

                                <div className='flex items-start'>
                                    <img src={img2} alt="image" />
                                </div>

                                <div className='flex items-end'>
                                    <img src={img3} alt="image" />
                                </div>

                                <div className='relative'>
                                    <img src={img4} alt="image" />

                                    <More className='absolute bottom-[10px] right-[10px] bg-white ' />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className='border-[1px] border-[#CCCCCC] mb-[26px]'></div>

                {Post_Data.map((item, index) => (
                    <div key={index} className='flex gap-5 mt-[24px] '>
                        <img src={item.profile} alt="profile" className='w-[56px] h-[56px]' />

                        <div className='w-full '>
                            <div className='bg-[#F1F2F5] py-[14px] px-5 rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] mb-2 '>
                                <SmallText
                                    text={item.name}
                                    className='!font-medium text-black mb-[10px] '
                                />

                                <SmallText
                                    text={item.comment}
                                    className='text-[#606162] '
                                />
                            </div>

                            <div className='flex gap-[7.5px] items-center ml-5'>
                                <DELETE />

                                <SmallText
                                    text={item.delete}
                                    className='text-[#666666] '
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewPost