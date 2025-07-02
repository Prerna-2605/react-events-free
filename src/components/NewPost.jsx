import React, { useState } from 'react'
import Heading from './common/Heading'
import line from '../assets/png/small-blue.png'
import AddComment from './common/AddComment'

const NewPost = () => {

    return (
        <div className='max-w-[1320px] mx-auto px-3 '>
            <img src={line} alt="line" className='mt-[76px]' />

            <Heading
                text={"New Posts"}
                className='font-semibold leading-[150%] mb-[30px] '
            />

            <AddComment
                className='shadow-3 '
            />
        </div>
    )
}

export default NewPost