import React from 'react'
import Button from './Button'

const Post = ({ profile, placeholder = '', className = '', profileClass = '', buttonClass = '', value = '', onChange = () => { }, onPost = () => { } }) => {
    return (
        <div className='relative '>
            <input type="text" placeholder={`${placeholder}`} value={value} onChange={onChange} className={`h-[70px] border border-[#9CA0BE] w-full py-5 rounded-full placeholder:font-poppins placeholder:font-normal placeholder:text-[20px] ${className} `} />
            <img src={profile} alt="profile" className={`absolute ${profileClass} `} />
            <Button
                text={'Post Comment'}
                onClick={onPost}
                className={`py-[16px] px-[26px] absolute whitespace-nowrap ${buttonClass} `}
            />
        </div>
    )
}

export default Post