import React from 'react'

const Button = ({ text, className = '', onClick }) => {
    return (
        <button onClick={onClick} className={`bg-[#2C49FE] whitespace-nowrap font-poppins font-semibold text-base text-white rounded-full cursor-pointer transition-all duration-200 active:scale-95 hover:scale-[1.025] ${className} `}>
            {text}
        </button>
    )
}

export default Button