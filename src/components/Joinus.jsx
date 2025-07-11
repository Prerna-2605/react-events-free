import React from 'react'
import bgimg from '../assets/webp/join-us.webp'
import blueline from '../assets/png/small-blue.png'
import Heading from './common/Heading'
import Description from './common/Description'
import Input from './common/Input'
import Button from './common/Button'

const Joinus = () => {
    return (
        <div className='max-w-[1320px] mx-auto mb-[90px] px-3 '>
            <div className="flex flex-wrap items-center">
                <div className="w-1/2 px-3 max-[945px]:hidden ">
                    <img src={bgimg} alt="image" draggable='false' className='w-[80%] ' />
                </div>

                <div className="w-1/2 px-3 max-[945px]:w-full ">
                    <img src={blueline} alt="image" draggable='false' />

                    <Heading
                        text={'Join Us !'}
                        className='my-[17px] '
                    />

                    <Description
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue '}
                        className='max-w-[543px] mb-[15px] '
                    />

                    <Heading
                        text={'Sign Up'}
                        className='text-[35px] mb-[14px] '
                    />

                    <div>
                        <div className='min-[430px]:flex justify-between mb-4 '>
                            <Input
                                type={'text'}
                                placeholder={'First Name'}
                                className='min-[430px]:max-w-[48.5%] w-full max-[430px]:mb-4 '
                            />
                            <Input
                                type={'text'}
                                placeholder={'Last Name'}
                                className='min-[430px]:max-w-[48.5%] w-full '
                            />
                        </div>

                        <Input
                            type={'email'}
                            placeholder={'Email Address'}
                            className='w-full mb-4 '
                        />

                        <div className='min-[430px]:flex justify-between mb-4 '>
                            <Input
                                type={'password'}
                                placeholder={'Password'}
                                className='min-[430px]:max-w-[48.5%] w-full max-[430px]:mb-4 '
                            />
                            <Input
                                type={'password'}
                                placeholder={'Confirm Password'}
                                className='min-[430px]:max-w-[48.5%] w-full '
                            />
                        </div>

                        <textarea className='w-full py-[10px] px-4 min-h-[124px] resize-none border border-[#999999] rounded-[5px] placeholder:font-poppins placeholder:font-normal placeholder:text-base placeholder:text-[#4D4D4D] mb-[37px] ' placeholder='About Me ' />
                    </div>

                    <Button
                        text={'Sign up'}
                        className='w-full py-[11px] '
                    />
                </div>
            </div>
        </div>
    )
}

export default Joinus