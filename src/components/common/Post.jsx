import React from 'react'
import Button from './Button'

const Post = ({ profile, placeholder = '', className = '', profileClass = '', buttonClass = '', value = '', onChange = () => { }, onPost = () => { } }) => {
    return (
        <div className='relative max-[515px]:flex max-[515px]:flex-col max-[515px]:items-end max-[515px]:gap-2 '>
            <input type="text" placeholder={`${placeholder}`} value={value} onChange={onChange} className={`h-[70px] max-md:h-[60px] max-sm:h-14 border border-[#9CA0BE] w-full py-5 rounded-full placeholder:font-poppins placeholder:font-normal placeholder:text-[20px] max-md:placeholder:text-[17px] max-sm:placeholder:text-sm ${className} `} />
            <img src={profile} alt="profile" draggable='false' className={`absolute ${profileClass} `} />
            <Button
                text={'Post Comment'}
                onClick={onPost}
                className={`py-[16px] px-[26px] max-md:py-[13px] max-sm:py-[11px] max-md:px-[18px] min-[515px]:absolute whitespace-nowrap max-sm:text-sm ${buttonClass} `}
            />
        </div>
    )
}

export default Post