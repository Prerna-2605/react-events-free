import React from 'react'

const SmallText = ({ className = '', text }) => {
    return (
        <p className={`font-poppins font-normal text-base text-[#4D4D4D] max-lg:text-[15px] max-md:text-sm ${className} `}>
            {text}
        </p>
    )
}

export default SmallText