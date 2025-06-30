import React from 'react'

const Input = ({ type, placeholder, className = '' }) => {
    return (
        <input type={`${type}`} placeholder={`${placeholder}`} className={`${className} py-[10px] px-[17px] border border-[#999999] rounded-[5px] placeholder:font-poppins placeholder:font-normal placeholder:text-base placeholder:text-[#4D4D4D] `} />
    )
}

export default Input