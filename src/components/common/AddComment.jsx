import React, { useState } from 'react'
import More from '../../components/common/More'
import {Post_Data, Username } from '../../utils/helper'
import profile1 from '../../assets/svg/profile1.svg'
import profile2 from '../../assets/svg/profile2.svg'
import SmallText from './../common/SmallText'
import date from '../../assets/svg/date.svg'
import { COMMENT, DELETE, LIKE } from '../../utils/Icons'
import img1 from '../../assets/png/newpost1.png'
import img2 from '../../assets/png/newpost2.png'
import img3 from '../../assets/png/newpost3.png'
import img4 from '../../assets/png/newpost4.png'
import Post from './../common/Post'

const AddComment = () => {
    const new_date = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: '2-digit',
        year: 'numeric',
    });
    const [showComments, setShowComments] = useState(false);
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(10); // starting likes
    const [comments, setComments] = useState([...Post_Data]);
    const [inputText, setInputText] = useState('');

    return (
        <div className='p-[34px] max-sm:p-4 rounded-[30px] mb-[45px] border border-[#CCCCCC] hover:shadow-3 hover:border-transparent transition-all duration-200 '>
            {Username.map((item, index) => (
                <div key={index} className='flex flex-wrap items-center max-lg:flex-col-reverse max-lg:gap-5 '>
                    <div className='w-[49%] max-lg:w-full px-3'>
                        <div className='flex gap-[23px] items-center mb-[45px] max-lg:hidden '>
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
                            className='font-semibold !text-2xl text-black leading-[150%] mb-2 max-lg:hidden '
                        />

                        <div className='flex gap-2 mb-5 items-center max-lg:hidden'>
                            <img src={date} alt="image" />

                            <SmallText
                                text={new_date}
                                className='text-[#666666] '
                            />
                        </div>

                        <SmallText
                            text={item.description1}
                            className='text-[#666666] lg:max-w-[553px] mb-[13px] '
                        />

                        <SmallText
                            text={item.description2}
                            className='text-[#666666] lg:max-w-[553px] mb-[26px] '
                        />

                        <div className='flex gap-10 '>
                            <button
                                onClick={() => {
                                    setLiked((prev) => !prev);
                                    setLikeCount((prev) => liked ? prev - 1 : prev + 1);
                                }}
                                className="flex gap-2 items-center"
                            >
                                <LIKE className={`cursor-pointer ${liked ? 'text-[#2C49FE]' : ''}`} liked={liked} />
                                <SmallText text={likeCount} />
                            </button>


                            <button
                                onClick={() => setShowComments((prev) => !prev)}
                                className="flex gap-2 items-center"
                            >
                                <COMMENT className="cursor-pointer" />
                                <SmallText text={comments.length} className="text-[#666666]" />
                            </button>

                        </div>
                    </div>
                    <div className='w-[51%] max-lg:w-full px-3'>
                        <div className='flex gap-[23px] items-center mb-4 lg:hidden '>
                            <img src={profile1} alt="profile" />

                            <div>
                                <SmallText
                                    text={item.name}
                                    className='font-semibold !text-2xl max-lg:!text-xl max-md:!text-[18px] leading-[150%] text-black '
                                />

                                <SmallText
                                    text={item.postname}
                                    className='text-[#666666] max-md:!text-[13px] '
                                />
                            </div>
                        </div>

                        <div className='flex gap-2 mb-5 items-center lg:hidden'>
                            <img src={date} alt="image" />

                            <SmallText
                                text={new_date}
                                className='text-[#666666] max-md:!text-[13px] '
                            />
                        </div>

                        <SmallText
                            text={item.title}
                            className='font-semibold !text-2xl max-lg:!text-xl max-md:!text-[18px] text-black leading-[150%] mb-6 lg:hidden'
                        />

                        <div className='grid grid-cols-2 gap-x-7 max-sm:gap-x-5 max-[425px]:!gap-x-4 max-lg:w-[70%] max-md:w-full mx-auto '>
                            <div className='flex items-end '>
                                <img src={img1} alt="image" className='w-full ' />
                            </div>

                            <div>
                                <img src={img2} alt="image" className='w-full ' />
                            </div>

                            <div className='flex items-end'>
                                <img src={img3} alt="image" className='w-full ' />
                            </div>

                            <div className='relative'>
                                <img src={img4} alt="image" className='w-full ' />

                                <More className='absolute bottom-[10px] right-[10px] bg-white ' />
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {showComments && (
                <>
                    <div className='border-[1px] border-[#CCCCCC] mt-[33px] mb-[26px]'></div>

                    <Post
                        profile={profile2}
                        placeholder='Write your comment here... '
                        className='pl-19 pr-[185px] max-md:pr-[168px] max-md:pl-[58px] max-[515px]:!pr-4 '
                        profileClass='top-[6.5px] left-[7.5px] size-[56px] max-md:size-[46px] max-sm:size-[44px] max-sm:top-[5.5px] '
                        buttonClass='top-[7px] right-[7px] max-md:top-[5.5px] max-md:right-[5px] '
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onPost={() => {
                            if (inputText.trim()) {
                                const newComment = {
                                    name: 'You',
                                    profile: profile2,
                                    comment: inputText,
                                    delete: 'Remove Comment'
                                };
                                setComments(prev => [newComment, ...prev]);
                                setInputText('');
                                setShowComments(true);
                            }
                        }}
                    />

                    {comments.map((item, index) => (
                        <div key={index} className='flex gap-5 mt-[24px] '>
                            <img src={item.profile} alt="profile" className='size-[56px] max-md:size-[46px] max-sm:size-[42px] ' />
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
                                <div
                                    className='flex gap-[7.5px] items-center ml-5 cursor-pointer'
                                    onClick={() => {
                                        if (window.confirm('Are you sure you want to delete this comment?')) {
                                            const updated = [...comments];
                                            updated.splice(index, 1);
                                            setComments(updated);
                                        }
                                    }}
                                >
                                    <DELETE />
                                    <SmallText text={item.delete} className='text-[#666666]' />
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default AddComment