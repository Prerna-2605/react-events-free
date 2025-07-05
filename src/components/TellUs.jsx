import React, { useState } from 'react'
import Heading from './common/Heading'
import Description from './common/Description'
import line from '../assets/png/very-small-blue.png'
import Post from './common/Post'
import { Tell_Us } from '../utils/helper'
import { DELETE } from '../utils/Icons'
import profile from '../assets/svg/profile1.svg'

const TellUs = () => {
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState([...Tell_Us]);

    return (
        <div className='max-w-[1320px] mx-auto mb-[118px] px-3 '>
            <img src={line} alt="image" draggable='false' className='block mx-auto ' />

            <Heading
                className='font-semibold text-center mb-4 leading-[1.5] '
                text={'Tell Us!'}
            />

            <Description
                className='max-w-[719px] mb-[47px] text-center mx-auto '
                text={'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.'}
            />
            <Post
                placeholder='Add a new comment '
                className='pl-[75px] pr-[190px] max-md:pl-[65px] max-md:pr-[170px] max-sm:pl-[60px] max-sm:pr-[15px] '
                buttonClass='top-[7.25px] right-[7px] max-md:top-[4.75px] max-md:right-[5px] '
                profile={profile}
                profileClass='top-[7.5px] left-2 max-md:top-[4.75px] max-md:w-[50px] max-md:left-[6px] max-sm:top-[5.25px] max-sm:w-[45px] max-sm:left-[6px] '
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                onPost={() => {
                    if (commentText.trim()) {
                        const newComment = {
                            name: 'You',
                            profile: profile,
                            comment: commentText,
                            delete: 'Remove Comment'
                        };
                        setComments(prev => [newComment, ...prev]);
                        setCommentText(''); // Reset input field
                    }
                }}
            />

            <div>
                {comments.map((item, index) => (
                    <div key={index} className='flex gap-5 mt-[24px] items-start '>
                        <img src={item.profile} alt="profile" draggable='false' className='size-[56px] max-md:size-[46px] max-sm:size-[42px] ' />

                        <div className='w-full '>
                            <div className='bg-[#F1F2F5] py-[14px] px-5 rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] mb-2 '>
                                <Heading
                                    text={item.name}
                                    className='!text-base !font-medium '
                                />
                                <Description
                                    text={item.comment}
                                    className='leading-[1.5] '
                                />
                            </div>
                            <div className='flex gap-[5px] items-center cursor-pointer pl-5 '
                                onClick={() => {
                                    if (window.confirm('Are you sure you want to delete this comment?')) {
                                        const updated = [...comments];
                                        updated.splice(index, 1);
                                        setComments(updated);
                                    }
                                }}
                            >
                                <DELETE />

                                <Description
                                    text={'Remove Comment'}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TellUs